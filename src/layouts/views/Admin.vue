<template>
	<BaseHeader v-if="!currentRouteMeta.hidePageHeader" />

	<slot />
</template>

<script lang="ts" setup>
import { useRouteInfo } from '@/composables/currentRouterInfo'
import { defineAsyncComponent } from 'vue'

const BaseHeader = defineAsyncComponent(
	() => import('../../components/BaseHeader.vue')
)
const { currentRouteMeta } = useRouteInfo()
</script>
