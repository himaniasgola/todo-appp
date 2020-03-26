<template>
  <div class="hello">
  <router-link :to="{ name: 'TodoForm', params: { msg } }">
         Newtask
      </router-link>
      <h1>Signin</h1>
    <form>
    <div class="form-group">
            <label for="firstName"><b>First Name</b></label>
            <input type="text" class="form-control" v-model="userData.firstName">
          </div>
          <div class="form-group"><br>
            <label for="lastName"><b>Last Name</b></label>
            <input type="text" class="form-control" v-model="userData.lastName">
          </div>
          <div class="form-group"><br>
            <label for="email"><b>Email</b></label>
            <input type="text" class="form-control" v-model="userData.email">
          </div>
          <div class="form-group"><br>
            <label for="password"><b>Password</b></label>
            <input type="password" class="form-control" v-model="userData.password">
            <p>
              {{ userData.password }}
            </p>
          </div>
          <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <button @click.prevent="submitted">Submit!</button>
        </div>
        </div>
    </form>
     <div class="row" v-if="isSubmitted">
       <h4>Your Data</h4>
          <div class="panel-body">
            <p>Full Name: {{ userData.firstName }} {{ userData.lastName }}</p>
            <p>Mail: {{ userData.email }}</p>
            <p>Password: {{ userData.password }}</p>
            <p>Store in Database?: {{ storeData }}</p>
            <h4>Assigned Task</h4>
            <p>Clean Room</p>
            <p>Eat dryfruits</p>
          </div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      userData: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      },
      storeData: 'Yes',
      isSubmitted: false
    }
  },
  methods: {
    submitted () {
      this.isSubmitted = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
