import React, {useEffect, useState} from "react"
import {RandStrWithLenProp} from "./Rand"
import {Form, Typography} from "antd"

const {Text} = Typography

export interface SingleTagProp extends RandStrWithLenProp {
    tag: string
    help: string
    enableInput?: boolean
    defaultInput?: string
    label?: string
    exampleInput?: string
}

export interface EncodeTagProp extends SingleTagProp {}

export const EncodeTag: React.FC<EncodeTagProp> = (props) => {
    const [origin, setOrigin] = useState(props.origin)

    useEffect(() => {
        if (!origin) {
            return
        }
        props.setOrigin(`{{${props.tag}(${origin})}}`)
    }, [origin])

    useEffect(() => {
        if ((props.origin || "").includes(`{{${props.tag}`)) {
            return
        }
        setOrigin(props.origin)
    }, [props])

    return (
        <>
            {props.help && (
                <Form.Item label={"编码标签介绍"}>
                    <Text mark={true}>{props.help}</Text>
                </Form.Item>
            )}
        </>
    )
}
