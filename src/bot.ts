/// <reference path="./types.d.ts" />


// Interface for connection to the Telegram server
interface TelegramServer {
    request(    query:  string,
                params: TelegramObject   ): any;
}


// Long type, for check return types
type ReturnedType = Array<Update> | boolean | WebhookInfo | User | Message | 
                    Array<Message> | UserProfilePhotos | File | string | Chat |
                    Array<ChatMember> | number | ChatMember | StickerSet | 
                    Array<GameHighScore>;


// Class for connection to the Telegram server
class Server implements TelegramServer {

    // Fields
    private readonly URL: string;

    // Constructor
    constructor(token: string) {
        this.URL = "https://api.telegram.org/bot" + token + "/";
    }

    // Sending request
    request(    query:  string,
                params: TelegramObject  ): ReturnedType { // throws Error
        
        // Concating URL
        const url: string = this.URL + query;
        
        // Preparing parameters of request
        const options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
            method: "post",
            contentType: "application/json; charset=utf-8",
            payload: JSON.stringify(params)
            // https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app#fetch(String,Object)
        }

        // Sending request
        let response: any = null; // one variable for multiple values of response
        type GoogleResponse = GoogleAppsScript.URL_Fetch.HTTPResponse;
        response = <GoogleResponse> UrlFetchApp.fetch(url, options); // throws Error

        // Checking response
        if(!response) {
            throw new Error("Incorrect response: " + response);
        }

        // Checking response code
        if(response.getResponseCode()!==200) {
            throw new Error("Response code != 200:\n" +
            JSON.stringify(response));
        }

        // Getting content
        response = response.getContentText();
        
        // Parsing to the Telegram response
        response = <ServerResponse> JSON.parse(response); // throws Error
        
        // Check Telegram response
        if(!response.ok) {
            throw new Error("Telegram response is not a true:\n" +
            JSON.stringify(response)); // throws Error
        }

        // Returning result
        return response.result;
    }
}


// Implementation all methods of Telegram Bot API
class TelegramBot implements
                        GetUpdatesMethod,
                        SetWebhookMethod,
                        DeleteWebhookMethod,
                        GetWebhookInfoMethod,
                        GetMeMethod,
                        SendMessageMethod,
                        ForwardMessageMethod,
                        SendPhotoMethod,
                        SendAudioMethod,
                        SendDocumentMethod,
                        SendVideoMethod,
                        SendAnimationMethod,
                        SendVoiceMethod,
                        SendVideoNoteMethod,
                        SendMediaGroupMethod,
                        SendLocationMethod,
                        EditMessageLiveLocationMethod,
                        StopMessageLiveLocationMethod,
                        SendVenueMethod,
                        SendContactMethod,
                        SendChatActionMethod,
                        GetUserProfilePhotosMethod,
                        GetFileMethod,
                        KickChatMemberMethod,
                        UnbanChatMemberMethod,
                        RestrictChatMemberMethod,
                        PromoteChatMemberMethod,
                        ExportChatInviteLinkMethod,
                        SetChatPhotoMethod,
                        DeleteChatPhotoMethod,
                        SetChatTitleMethod,
                        SetChatDescriptionMethod,
                        PinChatMessageMethod,
                        UnpinChatMessageMethod,
                        GetChatMethod,
                        GetChatAdministratorsMethod,
                        GetChatMembersCountMethod,
                        GetChatMemberMethod,
                        SetChatStickerSetMethod,
                        DeleteChatStickerSetMethod,
                        AnswerCallbackQueryMethod,
                        EditMessageTextMethod,
                        EditMessageCaptionMethod,
                        EditMessageMediaMethod,
                        EditMessageReplyMarkupMethod,
                        DeleteMessageMethod,
                        SendStickerMethod,
                        GetStickerSetMethod,
                        UploadStickerFileMethod,
                        CreateNewStickerSetMethod,
                        AddStickerToSetMethod,
                        SetStickerPositionInSetMethod,
                        DeleteStickerFromSetMethod,
                        AnswerInlineQueryMethod,
                        SendInvoiceMethod,
                        AnswerShippingQueryMethod,
                        AnswerPreCheckoutQueryMethod,
                        SetPassportDataErrorsMethod,
                        SendGameMethod,
                        SetGameScoreMethod,
                        GetGameHighScoresMethod {

    // Constructor
    constructor(private readonly SERVER: TelegramServer) {}

    // Implementation
    getUpdates(params: GetUpdates): Array<Update> { return this.SERVER.request("getUpdates", params); }
    setWebhook(params: SetWebhook): boolean { return this.SERVER.request("setWebhook", params); }
    deleteWebhook(): boolean { return this.SERVER.request("deleteWebhook", {} ); }
    getWebhookInfo(): WebhookInfo { return this.SERVER.request("getWebhookInfo", {} ); }
    getMe(): User { return this.SERVER.request("getMe", {} ); }
    sendMessage(params: SendMessage): Message { return this.SERVER.request("sendMessage", params); }
    forwardMessage(params: ForwardMessage): Message { return this.SERVER.request("forwardMessage", params); }
    sendPhoto(params: SendPhoto): Message { return this.SERVER.request("sendPhoto", params); }
    sendAudio(params: SendAudio): Message { return this.SERVER.request("sendAudio", params); }
    sendDocument(params: SendDocument): Message { return this.SERVER.request("sendDocument", params); }
    sendVideo(params: SendVideo): Message { return this.SERVER.request("sendVideo", params); }
    sendAnimation(params: SendAnimation): Message { return this.SERVER.request("sendAnimation", params); }
    sendVoice(params: SendVoice): Message { return this.SERVER.request("sendVoice", params); }
    sendVideoNote(params: SendVideoNote): Message { return this.SERVER.request("sendVideoNote", params); }
    sendMediaGroup(params: SendMediaGroup): Array<Message> { return this.SERVER.request("sendMediaGroup", params); }
    sendLocation(params: SendLocation): Message { return this.SERVER.request("sendLocation", params); }
    editMessageLiveLocation(params: EditMessageLiveLocation): Message | boolean { return this.SERVER.request("editMessageLiveLocation", params); }
    stopMessageLiveLocation(params: StopMessageLiveLocation): Message | boolean { return this.SERVER.request("stopMessageLiveLocation", params); }
    sendVenue(params: SendVenue): Message { return this.SERVER.request("sendVenue", params); }
    sendContact(params: SendContact): Message { return this.SERVER.request("sendContact", params); }
    sendChatAction(params: SendChatAction): boolean { return this.SERVER.request("sendChatAction", params); }
    getUserProfilePhotos(params: GetUserProfilePhotos): UserProfilePhotos { return this.SERVER.request("getUserProfilePhotos", params); }
    getFile(params: GetFile): File { return this.SERVER.request("getFile", params); }
    kickChatMember(params: KickChatMember): boolean { return this.SERVER.request("kickChatMember", params); }
    unbanChatMember(params: UnbanChatMember): boolean { return this.SERVER.request("unbanChatMember", params); }
    restrictChatMember(params: RestrictChatMember): boolean { return this.SERVER.request("restrictChatMember", params); }
    promoteChatMember(params: PromoteChatMember): boolean { return this.SERVER.request("promoteChatMember", params); }
    exportChatInviteLink(params: ExportChatInviteLink): string { return this.SERVER.request("exportChatInviteLink", params); }
    setChatPhoto(params: SetChatPhoto): boolean { return this.SERVER.request("setChatPhoto", params); }
    deleteChatPhoto(params: DeleteChatPhoto): boolean { return this.SERVER.request("deleteChatPhoto", params); }
    setChatTitle(params: SetChatTitle): boolean { return this.SERVER.request("setChatTitle", params); }
    setChatDescription(params: SetChatDescription): boolean { return this.SERVER.request("setChatDescription", params); }
    pinChatMessage(params: PinChatMessage): boolean { return this.SERVER.request("pinChatMessage", params); }
    unpinChatMessage(params: UnpinChatMessage): boolean { return this.SERVER.request("unpinChatMessage", params); }
    getChat(params: GetChat): Chat { return this.SERVER.request("getChat", params); }
    getChatAdministrators(params: GetChatAdministrators): Array<ChatMember> { return this.SERVER.request("getChatAdministrators", params); }
    getChatMembersCount(params: GetChatMembersCount): number { return this.SERVER.request("getChatMembersCount", params); }
    getChatMember(params: GetChatMember): ChatMember { return this.SERVER.request("getChatMember", params); }
    setChatStickerSet(params: SetChatStickerSet): boolean { return this.SERVER.request("setChatStickerSet", params); }
    deleteChatStickerSet(params: DeleteChatStickerSet): boolean { return this.SERVER.request("deleteChatStickerSet", params); }
    answerCallbackQuery(params: AnswerCallbackQuery): boolean { return this.SERVER.request("answerCallbackQuery", params); }
    editMessageText(params: EditMessageText): Message | boolean { return this.SERVER.request("editMessageText", params); }
    editMessageCaption(params: EditMessageCaption): Message | boolean { return this.SERVER.request("editMessageCaption", params); }
    editMessageMedia(params: EditMessageMedia): Message | boolean { return this.SERVER.request("editMessageMedia", params); }
    editMessageReplyMarkup(params: EditMessageReplyMarkup): Message | boolean { return this.SERVER.request("editMessageReplyMarkup", params); }
    deleteMessage(params: DeleteMessage): boolean { return this.SERVER.request("deleteMessage", params); }
    sendSticker(params: SendSticker): Message { return this.SERVER.request("sendSticker", params); }
    getStickerSet(params: GetStickerSet): StickerSet { return this.SERVER.request("getStickerSet", params); }
    uploadStickerFile(params: UploadStickerFile): File { return this.SERVER.request("uploadStickerFile", params); }
    createNewStickerSet(params: CreateNewStickerSet): boolean { return this.SERVER.request("createNewStickerSet", params); }
    addStickerToSet(params: AddStickerToSet): boolean { return this.SERVER.request("addStickerToSet", params); }
    setStickerPositionInSet(params: SetStickerPositionInSet): boolean { return this.SERVER.request("setStickerPositionInSet", params); }
    deleteStickerFromSet(params: DeleteStickerFromSet): boolean { return this.SERVER.request("deleteStickerFromSet", params); }
    answerInlineQuery(params: AnswerInlineQuery): boolean { return this.SERVER.request("answerInlineQuery", params); }
    sendInvoice(params: SendInvoice): Message { return this.SERVER.request("sendInvoice", params); }
    answerShippingQuery(params: AnswerShippingQuery): boolean { return this.SERVER.request("answerShippingQuery", params); }
    answerPreCheckoutQuery(params: AnswerPreCheckoutQuery): boolean { return this.SERVER.request("answerPreCheckoutQuery", params); }
    setPassportDataErrors(params: SetPassportDataErrors): boolean { return this.SERVER.request("setPassportDataErrors", params); }
    sendGame(params: SendGame): Message { return this.SERVER.request("sendGame", params); }
    setGameScore(params: SetGameScore): Message | boolean { return this.SERVER.request("setGameScore", params); }
    getGameHighScores(params: GetGameHighScores): Array<GameHighScore> { return this.SERVER.request("getGameHighScores", params); }   
}