<template>
	<div class="text-center">
		<h1 class="pa-16">Landing Page ...</h1>
		<BaseButton class="pa-16" variant="text" @click="goBack">
			Go BACK
		</BaseButton>
	</div>

	<!--	<div class="landingPage">-->
	<!--		&lt;!&ndash;    Nav bar&ndash;&gt;-->
	<!--		<v-row class="ml-16 mt-12 mr-4 pl-5 mb-12" no-gutters>-->
	<!--			<v-col cols="6">-->
	<!--				<v-img alt="" height="60" src="@/assets/logo.svg" width="326" />-->
	<!--			</v-col>-->
	<!--			<v-col align-self="center" class="align-content-start" cols="6">-->
	<!--				<v-row no-gutters>-->
	<!--					<v-col align-self="center">-->
	<!--						<v-item-group>-->
	<!--							<v-row-->
	<!--								align="center"-->
	<!--								class="justify-end align-content-end"-->
	<!--								no-gutters-->
	<!--							>-->
	<!--								<v-col-->
	<!--									v-for="item in navItems"-->
	<!--									:key="item.id"-->
	<!--									align-self="center"-->
	<!--									@click="handleSelectNav(item)"-->
	<!--								>-->
	<!--									<v-item v-slot="{ toggle }">-->
	<!--										<span-->
	<!--											:class="` text-navColor navStyle  text-center text-uppercase`"-->
	<!--											@click="toggle"-->
	<!--										>-->
	<!--											{{ item.text }}-->
	<!--										</span>-->
	<!--									</v-item>-->
	<!--								</v-col>-->
	<!--							</v-row>-->
	<!--						</v-item-group>-->
	<!--					</v-col>-->
	<!--					<v-col-->
	<!--						align-self="center"-->
	<!--						class="text-center align-content-center mr-6"-->
	<!--						cols="2"-->
	<!--					>-->
	<!--						<BaseButton-->
	<!--							class="text-navBtnTextColor navBtn px-5 py-3 text-uppercase"-->
	<!--							color="black"-->
	<!--							@click="handleSignUp"-->
	<!--						>-->
	<!--							Sign up-->
	<!--						</BaseButton>-->
	<!--					</v-col>-->
	<!--				</v-row>-->
	<!--			</v-col>-->
	<!--		</v-row>-->
	<!--		&lt;!&ndash;    Home Part&ndash;&gt;-->
	<!--		<v-row class="ml-16 mb-13" no-gutters>-->
	<!--			<v-col class="ml-5">-->
	<!--				<v-img-->
	<!--					class="position-relative imgP1"-->
	<!--					height="852"-->
	<!--					src="/src/assets/landingPage1part.svg"-->
	<!--					width="1720"-->
	<!--				>-->
	<!--					<template #default>-->
	<!--						<BaseButton-->
	<!--							class="text-navBtnTextColor shopNowBtn px-5 py-3 text-capitalize position-absolute"-->
	<!--							color="black"-->
	<!--							@click="handleSignUp"-->
	<!--						>-->
	<!--							shop now-->
	<!--						</BaseButton>-->
	<!--					</template>-->
	<!--				</v-img>-->
	<!--			</v-col>-->
	<!--		</v-row>-->
	<!--		&lt;!&ndash;    Companies&ndash;&gt;-->
	<!--		<div class="mb-16">-->
	<!--			<v-img :src="`/src/assets/brands.png`" class="w-100" height="186"></v-img>-->
	<!--		</div>-->
	<!--		&lt;!&ndash;    New Arrival  &ndash;&gt;-->
	<!--		<div class="ml-16 mb-16">-->
	<!--			<v-img height="58" src="/src/assets/newArrivals.svg" width="412" />-->
	<!--		</div>-->
	<!--		<v-row class="ml-16" no-gutters style="margin-bottom: 119px">-->
	<!--			<v-col-->
	<!--				v-for="i in girlsCard"-->
	<!--				align-self="center"-->
	<!--				class="mr-auto"-->
	<!--				cols="3"-->
	<!--			>-->
	<!--				<v-img :src="`/src/assets/${i}.png`" height="704" width="484"></v-img>-->
	<!--				<div-->
	<!--					class="d-flex justify-lg-space-between align-content-center align-center"-->
	<!--				>-->
	<!--					<div>-->
	<!--						<div class="newArrivalTitle text-newArrivalTitle">-->
	<!--							{{ i }}-->
	<!--						</div>-->
	<!--						<div class="newArrivalSubTitle" @click="handleExplore(i)">-->
	<!--							Explore Now!-->
	<!--						</div>-->
	<!--					</div>-->
	<!--					<div>-->
	<!--						<v-icon size="large">mdi-arrow-right</v-icon>-->
	<!--					</div>-->
	<!--				</div>-->
	<!--			</v-col>-->
	<!--		</v-row>-->
	<!--		<v-card-->
	<!--			:image="`/src/assets/Banner.png`"-->
	<!--			class="position-relative"-->
	<!--			height="968px"-->
	<!--			width="100%"-->
	<!--		/>-->
	<!--	</div>-->
</template>

<script lang="ts" setup>
import { INavItems } from '@/modules/landingPage/types/types'
import BaseButton from '@/components/BaseButton.vue'
import router from '@/router'

const girlsCard = ['Hoodies & Sweetshirt', 'Coats & Parkas', 'Tees & T-Shirt']
const navItems: INavItems[] = [
	{
		id: 1,
		text: 'category'
	},
	{
		id: 2,
		text: 'fashion'
	},
	{
		id: 3,
		text: 'FAVOURITE'
	},
	{
		id: 4,
		text: 'LIFESTYLE'
	}
]

function handleSignUp() {
	//
}

function handleSelectNav(item: INavItems) {
	console.log(item)
}

function goBack() {
	router.back()
}

function handleExplore(item: string) {
	console.log(item)
}
</script>
<style>
.landingPage {
	font-family: 'Poppins';
}

.shopNowBtn {
	position: absolute;
	top: 84%;
	left: 25%;
	transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	background-color: #555;
	color: white;
	font-size: 16px;
	padding: 12px 24px;
	border: none;
	cursor: pointer;
	border-radius: 5px;
}

.navStyle {
	font-size: 22px;
	font-style: normal;
	font-weight: 500 !important;
	line-height: normal;
}

.navBtn {
	width: 134px;
	font-size: 24px;
	font-weight: 500 !important;
}

.landingPage .v-btn.v-btn--density-default {
	height: 62px;
}

.newArrivalTitle {
	margin-top: 28px;
	font-size: 32px;
	font-weight: 500;
	line-height: 50px;
	letter-spacing: -0.04em;
	text-align: left;
}
</style>
