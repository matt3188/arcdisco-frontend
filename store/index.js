import { mainNavigation } from '~/graphql/mainNavigation'
import { footer } from '~/graphql/footer'
import { normalise } from '~/utils/normalise'

export const state = () => ({
  mainMenu: [],
  footerMenu: [],
  footerInfo: {},
})

export const mutations = {
  setMenu(state, menu) {
    state[menu.name] = menu.data
  },
  setFooterInfo(state, info) {
    state.footerInfo = info
  },
}

export const actions = {
  async fetchMenu(state, menuName) {
    const client = this.app.apolloProvider.defaultClient
    return await client.query({
      query: mainNavigation,
      variables: {
        navigationIdOrSlug: menuName,
      },
    })
  },
  async fetchMainMenu({ commit, dispatch }, menuName) {
    const res = await dispatch('fetchMenu', menuName)
    commit('setMenu', { name: 'mainMenu', data: res.data.renderNavigation })
  },
  async fetchFooterMenu({ commit, dispatch }, menuName) {
    const res = await dispatch('fetchMenu', menuName)
    commit('setMenu', { name: 'footerMenu', data: res.data.renderNavigation })
  },
  async fetchFooterInfo({ commit }, state) {
    const client = this.app.apolloProvider.defaultClient
    const res = await client.query({
      query: footer,
    })
    commit('setFooterInfo', normalise(res.data.footers))
  },
}
