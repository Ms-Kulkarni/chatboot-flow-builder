
import { useDrag } from "react-dnd";
import { IconMessage } from "@tabler/icons-react";
import { Text } from "@mantine/core";
import styles from "./msgNode.module.css";
//Message node is used on the nodes panel
const MessageNode: React.FC = () => {
    const [, drag] = useDrag(() => ({
        type: "message",
    }));

    return (
        <div ref={drag} className={styles["draggable-text-node"]}>
            <div className={styles["message-icon"]}>
                <IconMessage size={30} />
                <Text color="black">Message</Text>
            </div>
        </div>
    );
};

export default MessageNode;
