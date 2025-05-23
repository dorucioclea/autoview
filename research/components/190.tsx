import { tags } from "typia";
import React, { JSX } from "react";
import * as LucideReact from "lucide-react";
export namespace AutoViewInputSubTypes {
    export namespace legacy {
        export namespace open {
            export namespace v4 {
                export interface LegacyV4ThreadStreamMessagesView {
                    messages?: AutoViewInputSubTypes.legacy.v4.message.LegacyV4Message[];
                    bots?: AutoViewInputSubTypes.legacy.v4.LegacyV4Bot[];
                    users?: AutoViewInputSubTypes.legacy.v4.LegacyV4User[];
                    supportBots?: AutoViewInputSubTypes.legacy.v4.LegacyV4SupportBot[];
                    prev?: string;
                    next?: string;
                }
            }
        }
        export namespace v4 {
            export namespace message {
                export interface LegacyV4Message {
                    chatKey?: string;
                    id?: string;
                    mainKey?: string;
                    threadKey?: string;
                    root?: boolean;
                    channelId?: string;
                    chatType?: string;
                    chatId?: string;
                    personType?: string;
                    personId?: string;
                    requestId?: string;
                    language?: string;
                    createdAt?: number;
                    version?: number & tags.Type<"int32">;
                    blocks?: AutoViewInputSubTypes.legacy.v4.message.LegacyV4Block[];
                    plainText?: string;
                    updatedAt?: number;
                    buttons?: AutoViewInputSubTypes.legacy.v4.message.LegacyV4Button[] & tags.MinItems<1> & tags.MaxItems<2>;
                    files?: AutoViewInputSubTypes.legacy.v4.message.LegacyV4File[] & tags.MinItems<1> & tags.MaxItems<4>;
                    webPage?: AutoViewInputSubTypes.legacy.v4.LegacyV4WebPage;
                    log?: AutoViewInputSubTypes.legacy.v4.message.LegacyV4Log;
                    reactions?: AutoViewInputSubTypes.legacy.v4.message.LegacyV4Reaction[];
                    profileBot?: AutoViewInputSubTypes.legacy.v4.message.LegacyV4ProfileBotInput[] & tags.MinItems<1> & tags.MaxItems<2147483647>;
                    state?: "sending" | "sent" | "failed" | "removed";
                    options?: ("actAsManager" | "displayAsChannel" | "doNotPost" | "doNotSearch" | "doNotSendApp" | "doNotUpdateDesk" | "immutable" | "private" | "silent")[] & tags.UniqueItems;
                    marketing?: AutoViewInputSubTypes.legacy.v4.message.LegacyV4MessageMarketing;
                    supportBot?: AutoViewInputSubTypes.legacy.v4.message.LegacyV4MessageSupportBot;
                    threadMsg?: boolean;
                    broadcastedMsg?: boolean;
                    rootMessageId?: string;
                }
                export interface LegacyV4Block {
                    type: "bullets" | "code" | "text";
                    language?: string;
                    value?: string;
                    blocks?: AutoViewInputSubTypes.legacy.v4.message.LegacyV4Block[];
                }
                export interface LegacyV4Button {
                    title: string;
                    colorVariant?: "cobalt" | "green" | "orange" | "red" | "black" | "pink" | "purple";
                    url: string;
                }
                export interface LegacyV4File {
                    id: string;
                    type?: string;
                    name: string;
                    size: number & tags.Type<"int32">;
                    contentType?: string;
                    duration?: number;
                    width?: number & tags.Type<"int32">;
                    height?: number & tags.Type<"int32">;
                    orientation?: number & tags.Type<"int32">;
                    animated?: boolean;
                    bucket: string;
                    key: string;
                    previewKey?: string;
                    channelId?: string;
                    chatType?: string;
                    chatId?: string;
                }
                export interface LegacyV4Log {
                    action?: "changeName" | "changeScope" | "close" | "create" | "invite" | "join" | "assign" | "unassign" | "leave" | "open" | "remove" | "snooze" | "addTags" | "removeTags";
                    values?: string[];
                }
                export interface LegacyV4Reaction {
                    emojiName: string;
                    personKeys?: string[] & tags.UniqueItems;
                    empty?: boolean;
                }
                export interface LegacyV4ProfileBotInput {
                    id?: string;
                    key?: string;
                    type?: string;
                    name?: string;
                    value?: AutoViewInputSubTypes.AttributeValue;
                }
                export interface LegacyV4MessageMarketing {
                    type?: string;
                    id?: string;
                    advertising?: boolean;
                    sendToOfflineXms?: boolean;
                    sendToOfflineEmail?: boolean;
                    exposureType?: "fullScreen";
                }
                export interface LegacyV4MessageSupportBot {
                    id?: string;
                    revisionId?: string;
                    sectionId?: string;
                    stepIndex?: number & tags.Type<"int32">;
                    buttons?: AutoViewInputSubTypes.legacy.v4.LegacyV4SupportBotRouteSection_dollar_LegacyV4Button[];
                    submitButtonIndex?: number & tags.Type<"int32">;
                }
            }
            export interface LegacyV4WebPage {
                id: string;
                url: string;
                title?: string;
                description?: string;
                imageUrl?: string;
                videoUrl?: string;
                publisher?: string;
                author?: string;
                width?: number & tags.Type<"int32">;
                height?: number & tags.Type<"int32">;
                bucket?: string;
                previewKey?: string;
                logo?: string;
                name?: string;
            }
            export interface LegacyV4SupportBotRouteSection_dollar_LegacyV4Button {
                text: string;
                nextSectionId: string;
            }
            export interface LegacyV4Bot {
                id?: string;
                channelId?: string;
                name: string;
                createdAt?: number;
                avatar?: AutoViewInputSubTypes.legacy.v4.LegacyV4TinyFile;
                avatarUrl?: string;
                color: string & tags.Default<"#123456">;
            }
            export interface LegacyV4TinyFile {
                bucket: string;
                key: string;
                width?: number & tags.Type<"int32">;
                height?: number & tags.Type<"int32">;
            }
            export interface LegacyV4User {
                id?: string;
                channelId?: string;
                memberId?: string;
                veilId?: string;
                unifiedId?: string;
                name?: string;
                profile?: {
                    [key: string]: {};
                };
                profileOnce?: AutoViewInputSubTypes.profile.UserProfile;
                tags?: string[] & tags.MinItems<0> & tags.MaxItems<10> & tags.UniqueItems;
                alert?: number & tags.Type<"int32">;
                unread?: number & tags.Type<"int32">;
                popUpChatId?: string;
                blocked?: boolean;
                unsubscribed?: boolean;
                hasChat?: boolean;
                hasPushToken?: boolean;
                language?: string & tags.Default<"en">;
                country?: string;
                city?: string;
                latitude?: number;
                longitude?: number;
                web?: AutoViewInputSubTypes.WebInfo;
                mobile?: AutoViewInputSubTypes.MobileInfo;
                sessionsCount?: number & tags.Type<"int32">;
                lastSeenAt?: number;
                createdAt?: number;
                updatedAt?: number;
                expireAt?: number;
                version?: number & tags.Type<"int32">;
                managedKey?: number & tags.Type<"int32">;
                member?: boolean;
                email?: string;
                userId?: string;
                avatarUrl?: string;
                managed?: boolean;
                mobileNumber?: string & tags.Default<"+18004424000">;
                systemLanguage?: string & tags.Default<"en">;
            }
            export interface LegacyV4SupportBot {
                id?: string;
                channelId: string;
                pluginId?: string;
                botName: string;
                name: string;
                order: number & tags.Minimum<0>;
                pageQuery?: AutoViewInputSubTypes.Expression;
                userQuery?: AutoViewInputSubTypes.Expression;
                draft?: AutoViewInputSubTypes.supportbot.SupportBotDraft;
                revisionId?: string;
                state: "draft" | "active" | "stopped";
                runMode: "always" | "away" | "inOperation" | "private";
                start?: number & tags.Type<"int32">;
                stop?: number & tags.Type<"int32">;
                chatOpen?: number & tags.Type<"int32">;
                createdAt?: number;
                updatedAt?: number;
                userChatExpireDuration?: string;
                managerId?: string;
            }
        }
    }
    export interface AttributeValue {
        s?: string;
        n?: string;
        b?: {
            short?: number & tags.Type<"int32">;
            char?: string;
            int?: number & tags.Type<"int32">;
            long?: number & tags.Type<"int32">;
            float?: number;
            double?: number;
            direct?: boolean;
            readOnly?: boolean;
        };
        m?: {
            [key: string]: AutoViewInputSubTypes.AttributeValue;
        };
        l?: AutoViewInputSubTypes.AttributeValue[];
        ss?: string[];
        ns?: string[];
        bs?: {
            short?: number & tags.Type<"int32">;
            char?: string;
            int?: number & tags.Type<"int32">;
            long?: number & tags.Type<"int32">;
            float?: number;
            double?: number;
            direct?: boolean;
            readOnly?: boolean;
        }[];
        "null"?: boolean;
        bool?: boolean;
    }
    export namespace profile {
        export interface UserProfile {
            [key: string]: {};
        }
    }
    export interface WebInfo {
        device?: string;
        os?: string;
        osName?: string;
        browser?: string;
        browserName?: string;
        sessionsCount?: number & tags.Type<"int32">;
        lastSeenAt?: number;
    }
    export interface MobileInfo {
        device?: string;
        os?: string;
        osName?: string;
        appName?: string;
        appVersion?: string;
        sdkName?: string;
        sdkVersion?: string;
        sessionsCount?: number & tags.Type<"int32">;
        lastSeenAt?: number;
    }
    export interface Expression {
        key?: string;
        type?: "boolean" | "date" | "datetime" | "list" | "listOfNumber" | "number" | "string" | "listOfObject";
        operator?: AutoViewInputSubTypes.Operator;
        values?: {}[];
        and?: AutoViewInputSubTypes.Expression[];
        or?: AutoViewInputSubTypes.Expression[];
    }
    export interface Operator {
    }
    export namespace supportbot {
        export interface SupportBotDraft {
            supportBot?: AutoViewInputSubTypes.supportbot.SupportBot;
            sections?: AutoViewInputSubTypes.supportbot.SupportBotSection[];
        }
        export interface SupportBot {
            id?: string;
            channelId: string;
            botName: string;
            name: string;
            order: number & tags.Minimum<0>;
            pageQuery?: AutoViewInputSubTypes.Expression;
            userQuery?: AutoViewInputSubTypes.Expression;
            draft?: AutoViewInputSubTypes.supportbot.SupportBotDraft;
            revisionId?: string;
            state: "draft" | "active" | "stopped";
            runMode: "always" | "away" | "inOperation" | "private";
            start?: number & tags.Type<"int32">;
            stop?: number & tags.Type<"int32">;
            chatOpen?: number & tags.Type<"int32">;
            createdAt?: number;
            updatedAt?: number;
            userChatExpireDuration?: string;
            managerId?: string;
        }
        export interface SupportBotSection {
            name?: string;
            actions?: AutoViewInputSubTypes.userchat.UserChatStaticAction[];
            id?: string;
            steps?: AutoViewInputSubTypes.supportbot.SupportBotSection_dollar_Step[];
            type: string;
        }
        export interface SupportBotSection_dollar_Step {
            message: AutoViewInputSubTypes.message.NestedMessage;
        }
    }
    export namespace userchat {
        export interface UserChatStaticAction {
            type: string;
        }
    }
    export namespace message {
        export interface NestedMessage {
            blocks?: AutoViewInputSubTypes.message.Block[];
            buttons?: AutoViewInputSubTypes.message.Button[] & tags.MinItems<1> & tags.MaxItems<2>;
            files?: AutoViewInputSubTypes.message.File[] & tags.MinItems<1> & tags.MaxItems<30>;
            webPage?: AutoViewInputSubTypes.message.WebPage;
            form?: AutoViewInputSubTypes.message.form.Form;
        }
        export interface Block {
            type: "bullets" | "code" | "text";
            language?: string;
            value?: string;
            blocks?: AutoViewInputSubTypes.message.Block[];
        }
        export interface Button {
            title: string;
            colorVariant?: "cobalt" | "green" | "orange" | "red" | "black" | "pink" | "purple";
            action: AutoViewInputSubTypes.message.action.Action;
            /**
             * @deprecated
            */
            url?: string;
        }
        export namespace action {
            export interface Action {
                attributes?: AutoViewInputSubTypes.message.action.Attributes;
                type: string;
            }
            export interface Attributes {
            }
        }
        export interface File {
            id: string;
            type?: string;
            name: string;
            size: number & tags.Type<"int32">;
            contentType?: string;
            duration?: number;
            width?: number & tags.Type<"int32">;
            height?: number & tags.Type<"int32">;
            orientation?: number & tags.Type<"int32">;
            animated?: boolean;
            bucket: string;
            key: string;
            previewKey?: string;
            channelId?: string;
            chatType?: string;
            chatId?: string;
        }
        export interface WebPage {
            id: string;
            url: string;
            title?: string;
            description?: string;
            imageUrl?: string;
            videoUrl?: string;
            publisher?: string;
            author?: string;
            width?: number & tags.Type<"int32">;
            height?: number & tags.Type<"int32">;
            bucket?: string;
            previewKey?: string;
            logo?: string;
            name?: string;
        }
        export namespace form {
            export interface Form {
                submittedAt?: number;
                inputs?: AutoViewInputSubTypes.message.form.FormInput[];
                type: string;
            }
            export interface FormInput {
                value?: {};
                readOnly?: boolean;
                type?: "text" | "number" | "bool" | "date" | "datetime" | "radio" | "singleSelect" | "checkbox" | "multiSelect";
                label?: string;
                bindingKey?: string;
                dataType?: "string" | "date" | "list" | "listOfNumber" | "number" | "datetime" | "boolean";
                userChatProfileBindingKey?: boolean;
                userProfileBindingKey?: boolean;
            }
        }
    }
}
export type AutoViewInput = AutoViewInputSubTypes.legacy.open.v4.LegacyV4ThreadStreamMessagesView;



// The component name must always be "VisualComponent"
export default function VisualComponent(value: AutoViewInput): React.ReactNode {
  // 1. Define data aggregation/transformation functions or derived constants if necessary.
  const users = value.users ?? [];
  const bots = value.bots ?? [];
  const supportBots = value.supportBots ?? [];
  const messages = value.messages ?? [];

  // Helper to get sender name and avatar URL
  const getSenderInfo = (
    msg: AutoViewInputSubTypes.legacy.v4.message.LegacyV4Message
  ): { name: string; avatar: string } => {
    let name = msg.personType ?? "Unknown";
    let avatar = "";

    if (msg.personType === "bot") {
      const bot = bots.find((b) => b.id === msg.personId);
      if (bot) {
        name = bot.name;
        avatar = bot.avatarUrl
          ? bot.avatarUrl
          : `https://ui-avatars.com/api/?name=${encodeURIComponent(
              bot.name
            )}&background=64748b&color=fff`;
      }
    } else if (msg.personType === "user") {
      const user = users.find((u) => u.id === msg.personId);
      if (user) {
        name = user.name ?? name;
        avatar = user.avatarUrl
          ? user.avatarUrl
          : `https://ui-avatars.com/api/?name=${encodeURIComponent(
              name
            )}&background=0d8abc&color=fff`;
      }
    } else if (msg.personType === "supportBot") {
      const sb = supportBots.find((s) => s.id === msg.personId);
      if (sb) {
        name = sb.name;
      }
      avatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(
        name
      )}&background=4f46e5&color=fff`;
    }

    if (!avatar) {
      avatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(
        name
      )}&background=334155&color=fff`;
    }
    return { name, avatar };
  };

  // Format timestamp to readable string
  const formatTimestamp = (ts?: number): string =>
    ts
      ? new Date(ts).toLocaleString(undefined, {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })
      : "";

  // 2. Compose the visual structure using JSX and Tailwind CSS.
  if (messages.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow">
        <LucideReact.AlertCircle
          size={48}
          className="text-gray-300"
          aria-label="No messages"
        />
        <p className="mt-2 text-gray-500">No messages available</p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-md space-y-4">
      {/* Summary */}
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <LucideReact.Users size={16} className="text-gray-500" />
          <span>
            {users.length} user{users.length !== 1 ? "s" : ""}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <LucideReact.Bot size={16} className="text-gray-500" />
          <span>
            {bots.length} bot{bots.length !== 1 ? "s" : ""}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <LucideReact.UserCheck size={16} className="text-gray-500" />
          <span>
            {supportBots.length} support bot
            {supportBots.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>

      {/* Messages */}
      <ul className="space-y-6">
        {messages.map((msg, idx) => {
          const { name, avatar } = getSenderInfo(msg);
          return (
            <li
              key={msg.id ?? idx}
              className="flex items-start space-x-3 last:mb-0"
            >
              {/* Avatar */}
              <img
                src={avatar}
                alt={name}
                className="w-8 h-8 rounded-full object-cover bg-gray-100"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    name
                  )}&background=334155&color=fff`;
                }}
              />

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-800">
                    {name}
                  </span>
                  <span className="text-xs text-gray-500">
                    {formatTimestamp(msg.createdAt)}
                  </span>
                </div>
                {msg.plainText && (
                  <p className="mt-1 text-gray-700 text-sm line-clamp-3 whitespace-pre-wrap">
                    {msg.plainText}
                  </p>
                )}
                {/* Attachments */}
                {msg.files && msg.files.length > 0 && (
                  <div className="mt-2 flex items-center gap-1 text-gray-500 text-sm">
                    <LucideReact.Paperclip size={14} />
                    <span>
                      {msg.files.length} attachment
                      {msg.files.length !== 1 ? "s" : ""}
                    </span>
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
