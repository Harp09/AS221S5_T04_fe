export interface ChatModel {
    id: number;
    message: string;
    response: string;
    status: string;
    userId: string;

    // control of the menu
    showMenuDelete: boolean;

    // control of the edit
    showMenuEdit: boolean;
}