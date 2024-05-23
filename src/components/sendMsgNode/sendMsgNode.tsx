import { Text } from "@mantine/core";
import { useNodeId } from "reactflow";
import { Handle, NodeProps, Position } from "reactflow";
import CustomHandle from "../customHandle/customHandle";
import { IconBrandWhatsapp, IconMessage } from '@tabler/icons-react';
import styles from "./sendMsgNode.module.css";

//SendMessageNode is a custom node
const SendMessageNode = ({ data }: NodeProps) => {
    const nodeId = useNodeId();

    return (
        <>
            <Handle
                type="target"
                id={nodeId + "a"}
                position={Position.Left}
                isConnectable={true}
            />
            <div className={styles["send-message"]}>
                <div className={styles["send-message-header"]}>
                    <IconMessage size={20} />
                    <Text size={15} color="black">Send Message</Text>
                    <IconBrandWhatsapp size={20} />
                </div>
                <Text size={20} className={styles["send-message-label"]} color="black">
                    {data.label}
                </Text>
            </div>
            <CustomHandle
                id={nodeId + "b"}
                type="source"
                position={Position.Right}
                isConnectable={1}
            />
        </>
    );
};

export default SendMessageNode;