import { VarComponent } from './varComponent'

export interface ListProps {
  loading?: boolean
  immediateCheck?: boolean
  finished?: boolean
  error?: boolean
  offset?: string | number
  loadingText?: string
  finishedText?: string
  errorText?: string
  onLoad?: () => void
  'onUpdate:loading'?: (loading: boolean) => void
  'onUpdate:error'?: (error: boolean) => void
}

export class List extends VarComponent {
  $props: ListProps
}

export class _ListComponent extends List {}
