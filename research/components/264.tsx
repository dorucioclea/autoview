import * as LucideReact from "lucide-react";
import React, { JSX } from "react";
import { tags } from "typia";

export namespace AutoViewInputSubTypes {
  export namespace open {
    export type ChatBasedUserChatsView = {
      prev?: string;
      next?: string;
      messages?: AutoViewInputSubTypes.Message[];
      sessions?: AutoViewInputSubTypes.ChatSession[];
      userChats?: AutoViewInputSubTypes.userchat.UserChat[];
      users?: AutoViewInputSubTypes.user.User[];
      managers?: AutoViewInputSubTypes.Manager[];
      chatTags?: AutoViewInputSubTypes.ChatTag[];
    };
  }
  export type Message = {
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
    buttons?: AutoViewInputSubTypes.message.Button[] &
      tags.MinItems<1> &
      tags.MaxItems<2>;
    files?: AutoViewInputSubTypes.message.File[] &
      tags.MinItems<1> &
      tags.MaxItems<30>;
    webPage?: AutoViewInputSubTypes.message.WebPage;
    log?: AutoViewInputSubTypes.message.Log;
    reactions?: AutoViewInputSubTypes.message.Reaction[];
    form?: AutoViewInputSubTypes.message.form.Form;
    state?: "sending" | "sent" | "failed" | "removed";
    options?: (
      | "actAsManager"
      | "displayAsChannel"
      | "doNotPost"
      | "doNotSearch"
      | "doNotSendApp"
      | "doNotUpdateDesk"
      | "immutable"
      | "private"
      | "silent"
      | "silentToManager"
      | "silentToUser"
    )[] &
      tags.MinItems<1> &
      tags.MaxItems<2147483647> &
      tags.UniqueItems;
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
  };
  export namespace message {
    export type Block = {
      type: "bullets" | "code" | "text";
      language?: string;
      value?: string;
      blocks?: AutoViewInputSubTypes.message.Block[];
    };
    export type MessageThread = {
      id?: string;
      managerIds?: string[] &
        tags.MinItems<1> &
        tags.MaxItems<2147483647> &
        tags.UniqueItems;
      repliedManagerIds?: string[] & tags.UniqueItems;
      replyCount?: number & tags.Type<"int32">;
      chatType?: string;
      chatId?: string;
      rootMessageId?: string;
    };
    export namespace meet {
      export type MessageMeet = {
        id?: string;
        chatType?: string;
        channelId?: string;
        state?:
          | "live"
          | "ended"
          | "transcribing"
          | "transcribed"
          | "transcribeFailed";
        mode?: "audio" | "video";
        amassedPersons?: string[] & tags.UniqueItems;
        roomStartedAt?: number;
        call?: AutoViewInputSubTypes.message.meet.Call;
        front?: AutoViewInputSubTypes.message.meet.Front;
        recording?: AutoViewInputSubTypes.message.meet.Recording;
        country?: string;
        stateV2?:
          | "live"
          | "ended"
          | "transcribing"
          | "transcribed"
          | "transcribeFailed";
        meetEndedAt?: number;
        managerIds?: string[] & tags.UniqueItems;
        meetType?: "front" | "call" | "team";
      };
      export type Call = {
        id?: string;
        from?: string & tags.Default<"+18004424000">;
        to?: string & tags.Default<"+18004424000">;
        direction?: "inbound" | "outbound";
        callServerIp?: string;
        missedReason?:
          | "notInOperation"
          | "userLeft"
          | "ringTimeOver"
          | "inboundRateLimit"
          | "noOperator"
          | "exceededQueue"
          | "abandonedInQueue"
          | "workflow"
          | "preservedNumber"
          | "unregisteredNumber"
          | "blockedUser";
        firstWaitingStartedAt?: number;
        createAt?: number;
        engagedAt?: number;
        closedAt?: number;
        missedHandledAt?: number;
        voiceMail?: boolean;
        userPhoneNumberType?: "mobileNumber" | "landlineNumber";
      };
      export type Front = {
        id?: string;
        direction?: "inbound" | "outbound";
        missedReason?:
          | "notInOperation"
          | "userLeft"
          | "ringTimeOver"
          | "inboundRateLimit"
          | "noOperator"
          | "exceededQueue"
          | "abandonedInQueue"
          | "workflow"
          | "preservedNumber"
          | "unregisteredNumber"
          | "blockedUser";
        engagedAt?: number;
        firstWaitingStartedAt?: number;
        missedHandledAt?: number;
      };
      export type Recording = {
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
      };
    }
    export type Button = {
      title: string;
      colorVariant?:
        | "cobalt"
        | "green"
        | "orange"
        | "red"
        | "black"
        | "pink"
        | "purple";
      action: AutoViewInputSubTypes.message.action.Action;
      /**
       * @deprecated
       */
      url?: string;
    };
    export namespace action {
      export type Action = {
        attributes?: AutoViewInputSubTypes.message.action.Attributes;
        type: string;
      };
      export type Attributes = {};
    }
    export type File = {
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
    };
    export type WebPage = {
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
    };
    export type Log = {
      action?:
        | "changeName"
        | "changeScope"
        | "close"
        | "autoClose"
        | "create"
        | "invite"
        | "join"
        | "assign"
        | "autoAssign"
        | "unassign"
        | "leave"
        | "open"
        | "autoOpen"
        | "enqueue"
        | "remove"
        | "snooze"
        | "addTags"
        | "removeTags"
        | "assignTeam"
        | "unassignTeam"
        | "joinMeet"
        | "leaveMeet"
        | "inviteMeet"
        | "missMeet"
        | "callbackMeet"
        | "processBranch"
        | "sendXms"
        | "addUserTags"
        | "removeUserTags"
        | "updatePriority"
        | "startWorkflow"
        | "endWorkflow"
        | "interruptWorkflow"
        | "interruptWorkflowByBot"
        | "tryOpenWithAlf";
      values?: string[];
      triggerType?: string;
      triggerId?: string;
    };
    export type Reaction = {
      emojiName: string;
      personKeys?: string[] & tags.UniqueItems;
    };
    export namespace form {
      export type Form = {
        submittedAt?: number;
        inputs?: AutoViewInputSubTypes.message.form.FormInput[];
        type: string;
      };
      export type FormInput = {
        value?: {};
        readOnly?: boolean;
        type?:
          | "text"
          | "number"
          | "bool"
          | "date"
          | "datetime"
          | "radio"
          | "singleSelect"
          | "checkbox"
          | "multiSelect";
        label?: string;
        bindingKey?: string;
        dataType?:
          | "string"
          | "date"
          | "list"
          | "listOfNumber"
          | "number"
          | "datetime"
          | "boolean";
        userChatProfileBindingKey?: boolean;
        userProfileBindingKey?: boolean;
      };
    }
    export namespace userchat {
      export type MessageMarketing = {
        type?: string;
        id?: string;
        advertising?: boolean;
        sendToOfflineXms?: boolean;
        sendToOfflineEmail?: boolean;
        exposureType?: "fullScreen";
      };
      /**
       * @deprecated
       */
      export type MessageSupportBot = {
        id?: string;
        revisionId?: string;
        sectionId?: string;
        stepIndex?: number & tags.Type<"int32">;
        buttons?: AutoViewInputSubTypes.supportbot.SupportBotRouteSection_dollar_Button[];
        submitButtonIndex?: number & tags.Type<"int32">;
      };
      export type MessageWorkflow = {
        id?: string;
        revisionId?: string;
        sectionId?: string;
        actionIndex?: number & tags.Type<"int32">;
        submitButtonId?: string;
        buttonBotMessage?: boolean;
      };
    }
    export namespace alf {
      export type MessageAlf = {
        type?:
          | "complete"
          | "rag"
          | "incomplete"
          | "impossible"
          | "command"
          | "faq"
          | "failed"
          | "rateLimited"
          | "openUserChat"
          | "system";
        references?: AutoViewInputSubTypes.message.alf.Reference[];
        mentionAlfAnswered?: boolean;
      };
      export type Reference = {
        index?: string;
        type: string;
      };
    }
  }
  export namespace supportbot {
    export type SupportBotRouteSection_dollar_Button = {
      text: string;
      nextSectionId: string;
    };
  }
  export namespace meet {
    export namespace ivr {
      export type MessageIvr = {
        audioFile?: AutoViewInputSubTypes.message.File;
      };
    }
  }
  export type ChatSession = {
    key?: string;
    chatId?: string;
    teamChatSectionId?: string;
    chatKey?: string;
    updatedKey?: string;
    unreadKey?: string;
    channelId?: string;
    alert?: number & tags.Type<"int32">;
    unread?: number & tags.Type<"int32">;
    watch?: "all" | "info" | "none";
    allMentionImportant?: boolean;
    readAt?: number;
    receivedAt?: number;
    postedAt?: number;
    updatedAt?: number;
    createdAt?: number;
    version?: number & tags.Type<"int32">;
    id?: string;
    chatType?: string;
    personType?: string;
    personId?: string;
  };
  export namespace userchat {
    export type UserChat = {
      id?: string;
      channelId?: string;
      alfStateKey?: string;
      contactKey?: string;
      contactMediumType?: string;
      liveMeetId?: string;
      sync?: boolean;
      state?: "closed" | "opened" | "snoozed" | "queued";
      missedReason?:
        | "notInOperation"
        | "userLeft"
        | "ringTimeOver"
        | "inboundRateLimit"
        | "noOperator"
        | "exceededQueue"
        | "abandonedInQueue"
        | "workflow"
        | "preservedNumber"
        | "unregisteredNumber"
        | "blockedUser";
      managed?: boolean;
      priority?: "low" | "medium" | "high";
      userId?: string;
      xerId?: string;
      name?: string;
      title?: string;
      description?: string;
      subtextType?: "description" | "incoming";
      handling?: AutoViewInputSubTypes.userchat.handling.UserChatHandling;
      source?: AutoViewInputSubTypes.userchat.UserChatSource;
      managerIds?: string[] &
        tags.MinItems<1> &
        tags.MaxItems<2147483647> &
        tags.UniqueItems;
      assigneeId?: string;
      teamId?: string;
      tags?: string[] & tags.MinItems<1> & tags.MaxItems<8> & tags.UniqueItems;
      profile?: {
        [key: string]: {};
      };
      goalEventName?: string;
      goalEventQuery?: AutoViewInputSubTypes.Expression;
      goalCheckedAt?: number;
      goalState?: "achieved" | "notAchieved" | "waiting" | "none";
      firstOpenedAt?: number;
      openedAt?: number;
      firstQueuedAt?: number;
      queuedAt?: number;
      createdAt?: number;
      updatedAt?: number;
      frontMessageId?: string;
      frontUpdatedAt?: number;
      deskMessageId?: string;
      summarizedMessageId?: string;
      deskUpdatedAt?: number;
      userLastMessageId?: string;
      followUpTriggeredAt?: number;
      firstAssigneeIdAfterOpen?: string;
      firstRepliedAt?: number;
      firstRepliedAtAfterOpen?: number;
      oneStop?: boolean;
      waitingTime?: number & tags.Type<"int32">;
      avgReplyTime?: number & tags.Type<"int32">;
      totalReplyTime?: number & tags.Type<"int32">;
      replyCount?: number & tags.Type<"int32">;
      resolutionTime?: number & tags.Type<"int32">;
      operationWaitingTime?: number & tags.Type<"int32">;
      operationAvgReplyTime?: number & tags.Type<"int32">;
      operationTotalReplyTime?: number & tags.Type<"int32">;
      operationReplyCount?: number & tags.Type<"int32">;
      operationResolutionTime?: number & tags.Type<"int32">;
      askedAt?: number;
      firstAskedAt?: number;
      closedAt?: number;
      snoozedAt?: number;
      expiresAt?: number;
      version?: number & tags.Type<"int32">;
      lastInboundEmailId?: string;
      alfRequestedAt?: number;
    };
    export namespace handling {
      export type UserChatHandling = {
        type: string;
      };
    }
    export type UserChatSource = {
      page?: string;
      marketing?: AutoViewInputSubTypes.userchat.UserChatSource_dollar_Marketing;
      supportBot?: AutoViewInputSubTypes.userchat.UserChatSource_dollar_SupportBot;
      workflow?: AutoViewInputSubTypes.userchat.UserChatSource_dollar_Workflow;
      appMessenger?: AutoViewInputSubTypes.userchat.UserChatSource_dollar_AppMessenger;
    };
    export type UserChatSource_dollar_Marketing = {
      id?: string;
      type?: string;
    };
    export type UserChatSource_dollar_SupportBot = {
      id?: string;
      revisionId?: string;
      sectionPath?: string[];
    };
    export type UserChatSource_dollar_Workflow = {
      id?: string;
      revisionId?: string;
      traceId?: string;
      sectionPath?: string[];
      causeOfEnd?: string;
    };
    export type UserChatSource_dollar_AppMessenger = {
      id?: string;
      mediumType?: string;
      displayName?: string;
    };
  }
  export type Expression = {
    key?: string;
    type?:
      | "boolean"
      | "date"
      | "datetime"
      | "list"
      | "listOfNumber"
      | "number"
      | "string"
      | "listOfObject";
    operator?: AutoViewInputSubTypes.Operator;
    values?: {}[];
    and?: AutoViewInputSubTypes.Expression[];
    or?: AutoViewInputSubTypes.Expression[];
  };
  export type Operator = {};
  export namespace user {
    export type User = {
      id?: string;
      channelId?: string;
      memberId?: string;
      veilId?: string;
      unifiedId?: string;
      type?: "member" | "lead" | "unified";
      name?: string;
      mobileNumberQualified?: boolean;
      emailQualified?: boolean;
      profile?: {
        [key: string]: {};
      };
      profileOnce?: AutoViewInputSubTypes.profile.UserProfile;
      tags?: string[] & tags.MinItems<0> & tags.MaxItems<20> & tags.UniqueItems;
      userImportTags?: string[] & tags.MinItems<0> & tags.MaxItems<30>;
      alert?: number & tags.Type<"int32">;
      unread?: number & tags.Type<"int32">;
      popUpChatId?: string;
      blocked?: boolean;
      blockedKey?: string;
      unsubscribeEmail?: boolean;
      unsubscribeEmailUpdatedAt?: number;
      unsubscribeTexting?: boolean;
      unsubscribeTextingUpdatedAt?: number;
      hasChat?: boolean;
      mainChatId?: string;
      hasPushToken?: boolean;
      language?: string & tags.Default<"en">;
      country?: string;
      timeZone?: string;
      province?: string;
      city?: string;
      latitude?: number;
      longitude?: number;
      web?: AutoViewInputSubTypes.WebInfo;
      mobile?: AutoViewInputSubTypes.MobileInfo;
      sessionsCount?: number & tags.Type<"int32">;
      lastSeenAt?: number;
      createdAt?: number;
      updatedAt?: number;
      version?: number & tags.Type<"int32">;
      managedKey?: number & tags.Type<"int32">;
      named?: boolean;
      member?: boolean;
      email?: string;
      avatarUrl?: string;
      mobileNumber?: string & tags.Default<"+18004424000">;
      landlineNumber?: string & tags.Default<"+18004424000">;
      constrainted?: boolean;
      systemLanguage?: string & tags.Default<"en">;
    };
  }
  export namespace profile {
    export type UserProfile = {
      [key: string]: {};
    };
  }
  export type WebInfo = {
    device?: string;
    os?: string;
    osName?: string;
    browser?: string;
    browserName?: string;
    sessionsCount?: number & tags.Type<"int32">;
    lastSeenAt?: number;
  };
  export type MobileInfo = {
    device?: string;
    os?: string;
    osName?: string;
    appName?: string;
    appVersion?: string;
    sdkName?: string;
    sdkVersion?: string;
    sessionsCount?: number & tags.Type<"int32">;
    lastSeenAt?: number;
  };
  export type Manager = {
    id?: string;
    channelId?: string;
    accountId?: string;
    name: string;
    description?: string;
    showDescriptionToFront?: boolean;
    nameDescI18nMap?: {
      [key: string]: AutoViewInputSubTypes.NameDesc;
    };
    profile?: {
      [key: string]: {};
    };
    email?: string;
    showEmailToFront?: boolean;
    mobileNumber?: string & tags.Default<"+18004424000">;
    showMobileNumberToFront?: boolean;
    roleId?: string;
    removed?: boolean;
    createdAt?: number;
    updatedAt?: number;
    removedAt?: number;
    displayAsChannel?: boolean;
    defaultGroupWatch?: "all" | "info" | "none";
    defaultDirectChatWatch?: "all" | "info" | "none";
    defaultUserChatWatch?: "all" | "info" | "none";
    chatAlertSound?:
      | "none"
      | "drop"
      | "woody"
      | "bounce"
      | "crystal"
      | "xylo"
      | "quickKnock"
      | "candy"
      | "shine";
    meetAlertSound?: "cute" | "basic" | "gentle" | "marimba";
    showPrivateMessagePreview?: boolean;
    operatorScore?: number;
    touchScore?: number;
    avatar?: AutoViewInputSubTypes.TinyFile;
    operatorEmailReminder?: boolean;
    receiveUnassignedAlert?: boolean;
    receiveUnassignedChatAlert?: boolean;
    receiveUnassignedMeetAlert?: boolean;
    operator?: boolean;
    operatorStatusId?: string;
    defaultAllMentionImportant?: boolean;
    userMessageImportant?: boolean;
    assignableUserChatTypes?: ("sync" | "async")[] & tags.UniqueItems;
    autoAssignCapacity?: number & tags.Type<"uint32"> & tags.Maximum<100>;
    enableAutoAssignOnSync?: boolean;
    statusEmoji?: string;
    statusText?: string;
    statusClearAt?: number;
    doNotDisturb?: boolean;
    doNotDisturbClearAt?: number;
    accountDoNotDisturb?: boolean;
    accountDoNotDisturbClearAt?: number;
    enableReactedMessageIndex?: boolean;
    enableTeamMentionedMessageIndex?: boolean;
    operatorUpdatedAt?: number;
    pcInboxMeetAlert?: boolean;
    mobileInboxMeetAlert?: boolean;
    pcTeamChatMeetAlert?: boolean;
    mobileTeamChatMeetAlert?: boolean;
    managerId?: string;
    avatarUrl?: string;
    /**
     * @deprecated
     */
    meetOperator?: boolean;
    emailForFront?: string;
    mobileNumberForFront?: string & tags.Default<"+18004424000">;
  };
  export type NameDesc = {
    name: string & tags.Pattern<"^[^@#$%:/\\\\]+$">;
    description?: string;
  };
  export type TinyFile = {
    bucket: string;
    key: string;
    width?: number & tags.Type<"int32">;
    height?: number & tags.Type<"int32">;
  };
  export type ChatTag = {
    id?: string;
    channelId?: string;
    colorVariant?:
      | "red"
      | "orange"
      | "yellow"
      | "olive"
      | "green"
      | "cobalt"
      | "purple"
      | "pink"
      | "navy";
    name: string;
    key: string;
    description?: string;
    /**
     * @deprecated
     */
    followerIds?: string[] &
      tags.MinItems<1> &
      tags.MaxItems<2147483647> &
      tags.UniqueItems;
    createdAt?: number;
  };
}
export type AutoViewInput = AutoViewInputSubTypes.open.ChatBasedUserChatsView;

// The component name must always be "VisualComponent"
export default function VisualComponent(value: AutoViewInput): React.ReactNode {
  // 1. Define data aggregation/transformation functions or derived constants if necessary.
  const chats = value.userChats ?? [];
  const sessions = value.sessions ?? [];

  const formatTimestamp = (ts: number): string => {
    const d = new Date(ts);
    return d.toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  };

  const getStateIcon = (state?: string): JSX.Element | null => {
    switch (state) {
      case "opened":
        return <LucideReact.CheckCircle className="text-green-500" size={16} />;
      case "closed":
        return <LucideReact.XCircle className="text-gray-400" size={16} />;
      case "snoozed":
        return <LucideReact.Clock className="text-amber-500" size={16} />;
      case "queued":
        return <LucideReact.Clock className="text-amber-500" size={16} />;
      default:
        return <LucideReact.Circle className="text-gray-300" size={16} />;
    }
  };

  const stateTextMap: Record<string, string> = {
    opened: "Open",
    closed: "Closed",
    snoozed: "Snoozed",
    queued: "Queued",
  };

  // 2. Compose the visual structure using JSX and Tailwind CSS.
  if (chats.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-gray-400">
        <LucideReact.AlertCircle size={48} />
        <span className="mt-2 text-sm">No chats available</span>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <ul>
        {chats.map((chat) => {
          const session = sessions.find((s) => s.chatId === chat.id);
          const title = chat.title ?? chat.name ?? "Untitled Chat";
          const description = chat.description;
          const stateLabel = stateTextMap[chat.state ?? ""] ?? "Unknown";

          return (
            <li
              key={chat.id ?? Math.random()}
              className="flex items-start justify-between p-4 border-b last:border-b-0"
            >
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-gray-900 truncate">
                  {title}
                </h3>
                {description && (
                  <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                    {description}
                  </p>
                )}
              </div>
              <div className="flex flex-col items-end flex-shrink-0 space-y-1 ml-4">
                <div className="flex items-center space-x-1">
                  {getStateIcon(chat.state)}
                  <span className="text-xs text-gray-500">{stateLabel}</span>
                </div>
                {session && session.unread != null && session.unread > 0 && (
                  <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium text-white bg-red-500 rounded">
                    {session.unread}
                  </span>
                )}
                {session?.updatedAt && (
                  <div className="flex items-center text-xs text-gray-400">
                    <LucideReact.Calendar className="mr-1" size={14} />
                    <span>{formatTimestamp(session.updatedAt)}</span>
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
