<template>
  <aside
    id="app-dialog"
    ref="aside"
    class="app-dialog"
    :class="{
      'app-dialog_has': !!dialog.openedDialogs.length
    }"
    @click="click"
    @keydown.esc="hide"
  />
</template>

<script
  setup
  lang="ts"
>
import useDialog from '@/stores/dialog'
import { ref } from 'vue'

const
  dialog = useDialog(),
  aside = ref<HTMLElement>()

function click (event: Event): void {
  const path = event.composedPath()

  if (aside.value) {
    for (const element of path) {
      if ((element as unknown as { role: string }).role === 'dialog') {
        return
      }
    }
    hide()
  }
}

function hide () {
  dialog.hide()
}
</script>

<style
  lang="scss"
  scoped
>
.app-dialog {
  position: fixed;
  width: 100%;
  height: calc(calc(var(--vh) * 100) - var(--header-height));
  background-image: linear-gradient(rgba(0, 0, 0, .66) 0%, rgba(0, 0, 0, .0) 100%);
  background-repeat: no-repeat;
  background-position-y: calc(var(--vhf) * -2);
  background-size: 100% 300%;
  transition: opacity 0.25s ease-in-out, background 0.25s ease-in-out;
  z-index: 10;
  pointer-events: none;
  opacity: 0;
  top: var(--header-height);

  &_has {
    pointer-events: unset;
    background-position-y: center;
    opacity: 1;
  }
}
</style>