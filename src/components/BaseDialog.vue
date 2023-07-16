<script lang="ts" setup>
import BaseButton, { RButtonProps } from '@/components/BaseButton.vue'

export type RDialogProps = {
	/** A title to be displayed to the dialog */
	title: string

	/** The content of the modal */
	content: string

	/** Props to be passed to the OK Button */
	okButtonProps?: RButtonProps
}

withDefaults(defineProps<RDialogProps>(), {})

const emits = defineEmits<{
	(event: 'update:model-value', value: boolean): void
	(event: 'submit'): void
}>()

const onToggleDialog = (value: boolean) => {
	emits('update:model-value', value)
}
</script>

<template>
	<v-dialog :width="600" @update:model-value="onToggleDialog">
		<v-card class="pa-6">
			<v-row no-gutters>
				<!-- The header of the Dialog -->
				<v-col cols="auto">
					<h2 v-if="title" class="text-h6">{{ title }}</h2>
				</v-col>

				<!-- The content of the Dialog -->
				<v-col class="py-3" cols="12">
					{{ content }}
				</v-col>

				<!-- The Actions of the Dialog -->
				<v-col class="text-end">
					<BaseButton
						class="mx-2"
						variant="text"
						@click="onToggleDialog(false)"
					>
						Cancel
					</BaseButton>
					<BaseButton v-bind="okButtonProps" @click="emits('submit')">
						OK
					</BaseButton>
				</v-col>
			</v-row>
		</v-card>
	</v-dialog>
</template>
