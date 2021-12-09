import React from "react";
import {Button, Typography, Space, Table, Tag, Popconfirm} from "antd";
import {FuzzableParams} from "./HTTPFlowTable";
import {HTTPPacketFuzzable} from "./HTTPHistory";

const {Text} = Typography;

export interface FuzzableParamListProp extends HTTPPacketFuzzable {
    data: FuzzableParams[]
}

export const FuzzableParamList: React.FC<FuzzableParamListProp> = (props) => {
    return <Table<FuzzableParams>
        pagination={false}
        dataSource={props.data}
        columns={[
            {title: "参数名", render: (i: FuzzableParams) => <Tag>{i.ParamName}</Tag>},
            {title: "参数位置", render: (i: FuzzableParams) => <Tag>{i.Position}</Tag>},
            {
                title: "参数原值", render: (i: FuzzableParams) => <Tag><Text style={{maxWidth: 500}} ellipsis={{
                    tooltip: true,
                }} copyable={true}>
                    {i.OriginValue ? new Buffer(i.OriginValue).toString() : ""}
                </Text></Tag>
            },
            {title: "IsHTTPS", render: (i: FuzzableParams) => <Tag>{i.IsHTTPS}</Tag>},
            {
                title: "操作", render: (i: FuzzableParams) => <Space>
                    <Popconfirm title={"测试该参数将会暂时进入 Web Fuzzer"}
                                onConfirm={e => {
                                    if (props.sendToWebFuzzer) {
                                        props.sendToWebFuzzer(i.IsHTTPS, new Buffer(i.AutoTemplate).toString("utf8"))
                                    }
                                }}
                    >
                        <Button
                            type={"primary"} size={"small"}
                        >模糊测试该参数</Button>
                    </Popconfirm>
                </Space>
            },
        ]}
    >

    </Table>
};