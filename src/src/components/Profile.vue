<template>
  <table>
    <thead>
    <tr>
      <th>Claim</th>
      <th>Value</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(claim, index) in claims" :key="index">
      <td>{{ claim.claim }}</td>
      <td :id="'claim-' + claim.claim">{{ claim.value }}</td>
    </tr>
    </tbody>
  </table>

  <h2>ID TOKEN DATA</h2>
  <table>
    <thead>
    <tr>
      <th>Token property</th>
      <th>Value</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(value, index) in userData" :key="index">
      <td>{{ index }}</td>
      <td :id="'claiam-' + value">{{ value }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      claims: [],
      userData: [],
    }
  },
  async created() {
    const idToken = await this.$auth.tokenManager.get('idToken')
    this.claims = await Object.entries(idToken.claims).map(entry => ({claim: entry[0], value: entry[1]}))
    this.userData = await this.$auth.getUser();
  }
}
</script>