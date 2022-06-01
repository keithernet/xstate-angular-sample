// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  eventsCausingActions: {
    clearUserData: "load";
    assignUserData: "done.invoke.(machine).loading:invocation[0]";
  };
  internalEvents: {
    "done.invoke.(machine).loading:invocation[0]": {
      type: "done.invoke.(machine).loading:invocation[0]";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {
    getData: "done.invoke.(machine).loading:invocation[0]";
  };
  missingImplementations: {
    actions: "clearUserData" | "assignUserData";
    services: "getData";
    guards: never;
    delays: never;
  };
  eventsCausingServices: {
    getData: "load";
  };
  eventsCausingGuards: {};
  eventsCausingDelays: {};
  matchesStates: "loading" | "idle" | "error";
  tags: never;
}
