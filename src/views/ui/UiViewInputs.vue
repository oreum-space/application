<template>
  <ui-h
    id="inputs"
    level="2"
    class="mb2"
  >
    Inputs
  </ui-h>
  <ui-card class="pv6">
    <ui-h
      id="inputs-input-text"
      level="3"
      class="mb2"
    >
      Input Text
    </ui-h>
    <ui-input-text
      label="Default"
      model-value=""
    />
    <ui-input-text
      label="Disabled"
      model-value=""
      disabled
    />
    <ui-input-text
      label="Invalid"
      model-value=""
      invalid
    />
    <ui-h
      id="inputs-group"
      level="3"
      class="mb2 mt4"
    >
      Input Group
    </ui-h>
    <ui-input-group>
      <ui-input-text
        label="Input group 1"
        model-value=""
      />
      <ui-input-text
        label="Input group 2"
        model-value=""
      />
      <ui-input-text
        label="Input group 3"
        model-value=""
      />
    </ui-input-group>
    <ui-h
      id="inputs-textarea"
      level="3"
      class="mb2 mt4"
    >
      Input Textarea
    </ui-h>
    <ui-input-group>
      <ui-input-textarea
        label="Input TextArea"
        model-value=""
      />
    </ui-input-group>
  </ui-card>
  <ui-card class="pv6">
    <ui-h
      id="inputs-input-radio"
      level="3"
      class="mb2"
    >
      Input Radio
    </ui-h>
    <ui-input-radio-group-city
      class="mb1"
      :model-value="radioCityValue"
      :options="radioCities"
      options-key="cityKey"
      options-text-key="cityText"
      column
      @update:model-value="radioCityValue = $event"
    />
    <ui-input-radio-group-fruits
      :model-value="radioFruitsValue"
      :options="radioFruits"
      @update:model-value="radioFruitsValue = $event"
    />
  </ui-card>
  <ui-card class="pv6">
    <ui-h
      id="inputs-input-checkbox"
      level="3"
      class="mb2"
    >
      Input Checkbox
    </ui-h>
    <div class="flex gap4 mb1">
      <ui-input-check-box
        v-model="checkboxDiamond"
        label="Diamond"
      />
      <ui-input-check-box
        v-model="checkboxEmerald"
        label="Emerald"
      />
      <ui-input-check-box
        v-model="checkboxPeridot"
        label="Peridot"
      />
    </div>
    <div class="flex-row gap4">
      <ui-input-check-box
        v-model="checkboxDiamond"
        label="Diamond"
      />
      <ui-input-check-box
        v-model="checkboxEmerald"
        label="Emerald"
      />
      <ui-input-check-box
        v-model="checkboxPeridot"
        label="Peridot"
      />
    </div>
  </ui-card>
  <ui-card class="pv6">
    <ui-h
      id="inputs-color"
      level="3"
      class="mb2"
    >
      Input Color
    </ui-h>
    <ui-input-color-new
      v-model="color"
    />
  </ui-card>
  <ui-card>
    <ui-h
      id="inputs-select"
      level="3"
      class="mb2"
    >
      Input Select
    </ui-h>
    <ui-select
      v-model="selectOption"
      :options="selectOptions"
    />
    <div class="flex-row">
      <ui-select
        v-model="selectOptionPlaceholder"
        :options="selectOptions"
        label="Select"
      />
      <ui-button
        appearance="outlined"
        seriousness="passive"
        size="large"
        @click="selectOptionPlaceholder = null"
      >
        Reset
      </ui-button>
    </div>
  </ui-card>
</template>

<script
  setup
  lang="ts"
>
import UiInputCheckBox from '@/components/ui/input/UiInputCheckBox.vue'
import UiInputColorNew from '@/components/ui/input/color/UiInputColor.vue'
import UiButton from '@/components/ui/UiButton.vue'
import UiSelect from '@/components/ui/UiSelect.vue'
import { ref } from 'vue'
import UiInputGroup from '@/components/ui/input/UiInputGroup.vue'
import UiInputText from '@/components/ui/input/UiInputText.vue'
import UiInputTextarea from '@/components/ui/input/UiInputTextarea.vue'
import UiCard from '@/components/ui/UiCard.vue'
import UiH from '@/components/ui/UiH.vue'
import UiInputRadioGroupDefault, {
  GenericUiInputRadioGroup,
} from '@/components/ui/input/UiInputRadioGroup.vue'

// Radio Buttons
const radioFruits = ['Apple', 'Banana', 'Coconut', 'Dewberries'] as const
type RadioFruits = typeof radioFruits[number]
const UiInputRadioGroupFruits = UiInputRadioGroupDefault as GenericUiInputRadioGroup<RadioFruits>
const radioFruitsValue = ref<RadioFruits>(radioFruits[0])

// Radio Buttons Cities
const radioCities: Array<Record<string, string | number>> = [
  {
    cityText: 'Kazan',
    cityKey: 'kazan'
  },
  {
    cityText: 'Moscow',
    cityKey: 'moscow'
  },
  {
    cityText: 'Saint-Petersburg',
    cityKey: 'saintPetersburg'
  }
]
type RadioCity = typeof radioCities[number]
const UiInputRadioGroupCity = UiInputRadioGroupDefault as GenericUiInputRadioGroup<RadioCity>
const radioCityValue = ref<typeof radioCities[number]>(radioCities[0])

// CheckBoxes
const
  checkboxDiamond = ref<boolean>(false),
  checkboxEmerald = ref<boolean>(true),
  checkboxPeridot = ref<boolean>(false)

// Color
const color = ref<number>(0xE57737)

// Select
const
  selectOptions = [
    {
      display: 'String',
      value: '\'\''
    },
    {
      display: 'Number',
      value: '0'
    },
    {
      display: 'Boolean',
      value: 'false'
    },
    {
      display: 'Object',
      value: 'null'
    },
    {
      display: 'Array',
      value: '[]'
    },
    {
      display: 'undefined',
      value: 'undefined'
    },
    ...(
      new Array(40)
        .fill(0)
        .map((item, index) => ({ display: `index: ${index + 1}`, value: (index + 1).toString() }))
    )
  ],
  selectOption = ref(selectOptions[0]),
  selectOptionPlaceholder = ref<typeof selectOptions[number] | null>(null)


</script>

<style
  lang="scss"
  scoped
>
</style>
