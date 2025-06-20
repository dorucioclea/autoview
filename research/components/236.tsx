import { tags } from "typia";
import React, { JSX } from "react";
import * as LucideReact from "lucide-react";
export namespace AutoViewInputSubTypes {
    export namespace desk {
        export namespace message {
            export interface MessagesView {
                prev?: string;
                next?: string;
                messages?: AutoViewInputSubTypes.Message[];
                bots?: AutoViewInputSubTypes.bot.Bot[];
            }
        }
    }
    export interface Message {
        chatKey: string;
        id: string;
        mainKey?: string;
        threadKey?: string;
        meetKey?: string;
        frontKey?: string;
        channelId: string;
        chatType: string;
        chatId: string;
        personType: string;
        personId: string;
        requestId?: string;
        language?: string;
        createdAt: number;
        version?: number & tags.Type<"int32">;
        blocks?: AutoViewInputSubTypes.message.Block[];
        plainText?: string;
        updatedAt?: number;
        inboundEmailId?: string;
        thread?: AutoViewInputSubTypes.message.MessageThread;
        meet?: AutoViewInputSubTypes.message.meet.MessageMeet;
        removerKey?: string;
        buttons?: AutoViewInputSubTypes.message.Button[] & tags.MinItems<1> & tags.MaxItems<2>;
        files?: AutoViewInputSubTypes.message.File[] & tags.MinItems<1> & tags.MaxItems<30>;
        webPage?: AutoViewInputSubTypes.message.WebPage;
        log?: AutoViewInputSubTypes.message.Log;
        reactions?: AutoViewInputSubTypes.message.Reaction[];
        form?: AutoViewInputSubTypes.message.form.Form;
        state?: "sending" | "sent" | "failed" | "removed";
        options?: ("actAsManager" | "displayAsChannel" | "doNotPost" | "doNotSearch" | "doNotSendApp" | "doNotUpdateDesk" | "immutable" | "private" | "silent" | "silentToManager" | "silentToUser")[] & tags.MinItems<1> & tags.MaxItems<2147483647> & tags.UniqueItems;
        marketing?: AutoViewInputSubTypes.message.userchat.MessageMarketing;
        supportBot?: AutoViewInputSubTypes.message.userchat.MessageSupportBot;
        workflow?: AutoViewInputSubTypes.message.userchat.MessageWorkflow;
        alf?: AutoViewInputSubTypes.message.alf.MessageAlf;
        alertLevel?: "alert" | "unread" | "none";
        ivr?: AutoViewInputSubTypes.meet.ivr.MessageIvr;
        threadMsg?: boolean;
        meetMsg?: boolean;
        broadcastedMsg?: boolean;
        workflowButton?: boolean;
        rootMessageId?: string;
        removedByWriter?: boolean;
        threadRoot?: boolean;
        meetRoot?: boolean;
    }
    export namespace message {
        export interface Block {
            type: "bullets" | "code" | "text";
            language?: string;
            value?: string;
            blocks?: AutoViewInputSubTypes.message.Block[];
        }
        export interface MessageThread {
            id?: string;
            managerIds?: string[] & tags.MinItems<1> & tags.MaxItems<2147483647> & tags.UniqueItems;
            repliedManagerIds?: string[] & tags.UniqueItems;
            replyCount?: number & tags.Type<"int32">;
            chatType?: string;
            chatId?: string;
            rootMessageId?: string;
        }
        export namespace meet {
            export interface MessageMeet {
                id?: string;
                chatType?: string;
                channelId?: string;
                state?: "live" | "ended" | "transcribing" | "transcribed" | "transcribeFailed";
                mode?: "audio" | "video";
                amassedPersons?: string[] & tags.UniqueItems;
                roomStartedAt?: number;
                call?: AutoViewInputSubTypes.message.meet.Call;
                front?: AutoViewInputSubTypes.message.meet.Front;
                recording?: AutoViewInputSubTypes.message.meet.Recording;
                country?: string;
                stateV2?: "live" | "ended" | "transcribing" | "transcribed" | "transcribeFailed";
                meetEndedAt?: number;
                managerIds?: string[] & tags.UniqueItems;
                meetType?: "front" | "call" | "team";
            }
            export interface Call {
                id?: string;
                from?: string & tags.Default<"+18004424000">;
                to?: string & tags.Default<"+18004424000">;
                direction?: "inbound" | "outbound";
                callServerIp?: string;
                missedReason?: "notInOperation" | "userLeft" | "ringTimeOver" | "inboundRateLimit" | "noOperator" | "exceededQueue" | "abandonedInQueue" | "workflow" | "preservedNumber" | "unregisteredNumber" | "blockedUser";
                firstWaitingStartedAt?: number;
                createAt?: number;
                engagedAt?: number;
                closedAt?: number;
                missedHandledAt?: number;
                voiceMail?: boolean;
                userPhoneNumberType?: "mobileNumber" | "landlineNumber";
            }
            export interface Front {
                id?: string;
                direction?: "inbound" | "outbound";
                missedReason?: "notInOperation" | "userLeft" | "ringTimeOver" | "inboundRateLimit" | "noOperator" | "exceededQueue" | "abandonedInQueue" | "workflow" | "preservedNumber" | "unregisteredNumber" | "blockedUser";
                engagedAt?: number;
                firstWaitingStartedAt?: number;
                missedHandledAt?: number;
            }
            export interface Recording {
                id: string;
                bucket: string;
                key: string;
                contentType?: string;
                duration?: number;
                size?: number & tags.Type<"int32"> & tags.Maximum<10485760>;
                name?: string;
                type?: "file" | "image" | "video" | "audio";
                channelId?: string;
                chatType?: string;
                chatId?: string;
            }
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
        export interface Log {
            action?: "changeName" | "changeScope" | "close" | "autoClose" | "create" | "invite" | "join" | "assign" | "autoAssign" | "unassign" | "leave" | "open" | "autoOpen" | "enqueue" | "remove" | "snooze" | "addTags" | "removeTags" | "assignTeam" | "unassignTeam" | "joinMeet" | "leaveMeet" | "inviteMeet" | "missMeet" | "callbackMeet" | "processBranch" | "sendXms" | "addUserTags" | "removeUserTags" | "updatePriority" | "startWorkflow" | "endWorkflow" | "interruptWorkflow" | "interruptWorkflowByBot" | "tryOpenWithAlf";
            values?: string[];
            triggerType?: string;
            triggerId?: string;
        }
        export interface Reaction {
            emojiName: string;
            personKeys?: string[] & tags.UniqueItems;
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
        export namespace userchat {
            export interface MessageMarketing {
                type?: string;
                id?: string;
                advertising?: boolean;
                sendToOfflineXms?: boolean;
                sendToOfflineEmail?: boolean;
                exposureType?: "fullScreen";
            }
            /**
             * @deprecated
            */
            export interface MessageSupportBot {
                id?: string;
                revisionId?: string;
                sectionId?: string;
                stepIndex?: number & tags.Type<"int32">;
                buttons?: AutoViewInputSubTypes.supportbot.SupportBotRouteSection_dollar_Button[];
                submitButtonIndex?: number & tags.Type<"int32">;
            }
            export interface MessageWorkflow {
                id?: string;
                revisionId?: string;
                sectionId?: string;
                actionIndex?: number & tags.Type<"int32">;
                submitButtonId?: string;
                buttonBotMessage?: boolean;
            }
        }
        export namespace alf {
            export interface MessageAlf {
                type?: "complete" | "rag" | "incomplete" | "impossible" | "command" | "faq" | "failed" | "rateLimited" | "openUserChat" | "system";
                references?: AutoViewInputSubTypes.message.alf.Reference[];
                mentionAlfAnswered?: boolean;
            }
            export interface Reference {
                index?: string;
                type: string;
            }
        }
    }
    export namespace supportbot {
        export interface SupportBotRouteSection_dollar_Button {
            text: string;
            nextSectionId: string;
        }
    }
    export namespace meet {
        export namespace ivr {
            export interface MessageIvr {
                audioFile?: AutoViewInputSubTypes.message.File;
            }
        }
    }
    export namespace bot {
        export interface Bot {
            color?: string & tags.Default<"#123456">;
            createdAt?: number;
            avatarUrl?: string;
            ai?: boolean;
            name?: string;
            channelId?: string;
            id?: string;
            description?: string;
            nameDescI18nMap?: {
                [key: string]: AutoViewInputSubTypes.NameDesc;
            };
        }
    }
    export interface NameDesc {
        name: string & tags.Pattern<"^[^@#$%:/\\\\]+$">;
        description?: string;
    }
}
export type AutoViewInput = AutoViewInputSubTypes.desk.message.MessagesView;



// The component name must always be "VisualComponent"
export default function VisualComponent(value: AutoViewInput): React.ReactNode {
  // 1. Data aggregation/transformation
  const messages = value.messages ?? [];
  const bots = value.bots ?? [];
  const hasPrev = Boolean(value.prev);
  const hasNext = Boolean(value.next);

  // Format a timestamp to a readable date/time string
  const formatDate = (ts: number) =>
    new Date(ts).toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' });

  // Map message state to an icon
  const getStateIcon = (state?: string): React.ReactNode => {
    switch (state) {
      case 'sending':
        return <LucideReact.Clock size={16} className="text-amber-500" aria-label="Sending" />;
      case 'sent':
        return <LucideReact.CheckCircle size={16} className="text-green-500" aria-label="Sent" />;
      case 'failed':
        return <LucideReact.AlertTriangle size={16} className="text-red-500" aria-label="Failed" />;
      case 'removed':
        return <LucideReact.XCircle size={16} className="text-gray-400" aria-label="Removed" />;
      default:
        return null;
    }
  };

  // Determine bot avatar URL with fallback to initials
  const getBotAvatar = (bot: AutoViewInputSubTypes.bot.Bot): string =>
    bot.avatarUrl ??
    `https://ui-avatars.com/api/?name=${encodeURIComponent(bot.name ?? 'Bot')}&background=0D8ABC&color=fff`;

  // 2. Compose the visual structure using JSX and Tailwind CSS.
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      {/* Pagination indicators */}
      {(hasPrev || hasNext) && (
        <div className="flex justify-between items-center mb-4 text-gray-600 text-sm">
          <span className="flex items-center">
            <LucideReact.ChevronLeft
              size={16}
              className={hasPrev ? 'text-blue-500' : 'text-gray-300'}
            />
            <span className="ml-1 truncate">{value.prev ?? 'Prev'}</span>
          </span>
          <span className="flex items-center">
            <span className="mr-1 truncate">{value.next ?? 'Next'}</span>
            <LucideReact.ChevronRight
              size={16}
              className={hasNext ? 'text-blue-500' : 'text-gray-300'}
            />
          </span>
        </div>
      )}

      {/* Message list */}
      {messages.length > 0 ? (
        <div className="space-y-4">
          {messages.map((msg) => {
            const timeLabel = msg.createdAt ? formatDate(msg.createdAt) : '';
            const senderLabel = msg.personType
              ? msg.personType.charAt(0).toUpperCase() + msg.personType.slice(1)
              : 'Unknown';
            return (
              <div key={msg.id} className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <span className="font-medium truncate">{senderLabel}</span>
                  {timeLabel && (
                    <>
                      <span className="mx-2">•</span>
                      <LucideReact.Calendar size={12} className="mr-1" />
                      <span>{timeLabel}</span>
                    </>
                  )}
                  {msg.state && (
                    <>
                      <span className="mx-2">•</span>
                      {getStateIcon(msg.state)}
                    </>
                  )}
                </div>
                {msg.plainText ? (
                  <p className="text-gray-700 whitespace-pre-wrap line-clamp-3 break-words">
                    {msg.plainText}
                  </p>
                ) : (
                  <p className="text-gray-400 italic">No content</p>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-10 text-gray-400">
          <LucideReact.AlertCircle size={24} className="mb-2" />
          <span>No messages available</span>
        </div>
      )}

      {/* Bots section */}
      {bots.length > 0 && (
        <div className="mt-6">
          <div className="flex items-center text-gray-600 text-sm mb-2">
            <LucideReact.Users size={16} className="mr-1" />
            <span>Bots</span>
          </div>
          <div className="flex -space-x-2">
            {bots.map((bot) => (
              <img
                key={bot.id}
                src={getBotAvatar(bot)}
                alt={bot.name ?? 'Bot'}
                title={bot.name ?? 'Bot'}
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = 
                    `https://ui-avatars.com/api/?name=${encodeURIComponent(bot.name ?? 'Bot')}&background=e2e8f0&color=1e293b`;
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
