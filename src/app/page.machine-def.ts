import {createMachine} from "xstate";

export const machine = createMachine({
  initial: 'loading',
  schema: {
    events: {} as { type: 'load'},
    context: {} as {users: any[]},
    services: {} as {
      getData: {data: any[]}
    }},
  tsTypes: {} as import("./page.machine-def.typegen").Typegen0,
  context: {users: [] as any[]},
  on: {
    load: 'loading'
  },
  states: {
    loading: {
      entry: 'clearUserData',
      invoke: {
        src: 'getData',
        onDone: {
          target: 'idle',
        },
        onError: 'error'
      }
    },
    idle: {
      entry: ['assignUserData']
    },
    error: {

    }
  }
})

