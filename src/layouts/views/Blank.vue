<template>
	<div :class="currentRouteMeta.class">
		<slot />
	</div>
</template>

<script lang="ts" setup>
import { useRouteInfo } from '@/composables/currentRouterInfo'

const { currentRouteMeta } = useRouteInfo()
</script>
