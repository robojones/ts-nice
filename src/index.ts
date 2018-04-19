import once from 'once-promise/build'

export const a = once(process, 'exit')
