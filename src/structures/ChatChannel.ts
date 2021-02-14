import { Attachment } from "./Attachment";
import Message from "./Message";

export default interface ChatChannel {
    type: string,
    id: string,
    messageCount: number,
    lastMessage: Message,
    createdAt: Date,
    updatedAt: Date,
}

type dm = {
    created_at: number;
    updated_at: number;
    last_message: {
        attachments: Attachment[];
        avatar_url: string;
        conversation_id: string;
        created_at: number;
        favorited_by: never[];
        id: string;
        name: string;
        recipient_id: string;
        sender_id: string;
        sender_type: string;
        source_guid: string;
        text: string;
        user_id: string;
    };
    messages_count: number;
    other_user: {
        avatar_url: string;
        id: number;
        name: string;
    };
};
type group = {
    id: string;
    name: string;
    type: string;
    description: string;
    image_url: string;
    creator_user_id: string;
    created_at: number;
    updated_at: number;
    members: {
        user_id: string;
        nickname: string;
        muted: boolean;
        image_url: string;
    }[];
    share_url: string;
    messages: {
        count: number;
        last_message_id: string;
        last_message_created_at: number;
        preview: {
            nickname: string;
            text: string;
            image_url: string;
            attachments: Attachment[];
        };
    };
};