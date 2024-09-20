
import {GroupCount} from "@/pages/invoker/schema"
export interface YakRunnerCodeScanProps {
}

export interface CodeScanGroupByKeyWordProps {
    inViewport: boolean
}

export interface CodeScanGroupByKeyWordItemProps {
    item: GroupCount
    selected: boolean
    onSelect: (g: GroupCount) => void
}

export interface CodeScanExecuteContentProps {
    hidden: boolean
    setHidden: (v:boolean) => void
    onClearAll: () => void
    selectGroupList: string[]
}

export interface CodeScanByGroupProps {
    hidden: boolean
    setTotal:(v:number) => void
}

export interface CodeScanExecuteLogProps {
    hidden: boolean
}

export interface CodeScaMainExecuteContentProps {
    isExpand: boolean
    executeStatus: any
    selectNum: number
}