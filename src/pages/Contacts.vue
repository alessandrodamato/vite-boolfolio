<script>
  import { store } from '../data/store';
  import axios from 'axios';
  import Loader from '../components/partials/Loader.vue';
  export default {
    name: 'Contacts',
    components:{
      Loader
    },
    data(){
      return{
        formData:{
          name: '',
          surname: '',
          email: '',
          message: ''
        },
        errors: {},
        sending: false,
        sent: false
      }
    },
    methods:{
      submitForm(){
        this.sending = true;
        axios.post(store.apiUrl + 'send-email', this.formData)
             .then(res => {
              this.sending = false;
              this.sent = res.data.success;
              this.errors = res.data.errors;
              console.log(res.data);
             })
             .catch(err => {
              this.sending = false;
              console.log(err.message);
             })
      }
    }
  }
</script>



<template>
  <div class="main-wrapper container">
    <div v-if="!sent">
      <form v-if="!sending" @submit.prevent="submitForm()">
        <div class="form-image"></div>
        <div class="form-inputs">
          <h2>Contattaci</h2>
          <input type="text" placeholder="Nome*" v-model="formData.name" name="name">
          <span>{{errors.name?.toString()}}</span>
          <input type="text" placeholder="Cognome*" v-model="formData.surname" name="surname">
          <span>{{errors.surname?.toString()}}</span>
          <input type="email" placeholder="Email*" v-model="formData.email" name="email">
          <span>{{errors.email?.toString()}}</span>
          <textarea rows="4" placeholder="Messaggio*" v-model="formData.message" name="message"></textarea>
          <span>{{errors.message?.toString()}}</span>
          <button type="submit">Invia email</button>
        </div>
      </form>
      <Loader v-else />
    </div>
    <h1 v-else>Email inviata con successo!</h1>
  </div>
</template>



<style lang="scss" scoped>

  .main-wrapper{
    padding: 50px;
    text-align: center;
    form{
      display: flex;
      justify-content: flex-end;
      padding: 50px;
      border-radius: 10px;
      background-color: white;
      .form-inputs, .form-image{
        width: 50%;
      }
      .form-image{
        background-image: url('https://mailtrap.io/wp-content/uploads/2019/09/How-to-Send-an-Email-Using-Windows-PowerShell_API_transparent.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
      .form-inputs{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 30px;
        input, textarea, button{
          font-size: 1rem;
          font-family: Arial, Helvetica, sans-serif;
          width: 70%;
          margin: 15px 0 5px;
          padding: 15px;
          border-radius: 20px;
          border: none;
          outline: none;
          background: linear-gradient(to bottom right, gray, lightgray);
          &:hover{
            background: linear-gradient(to top left, gray, lightgray);
            cursor: pointer;
          }
          &::placeholder{
            color: black;
          }
        }
        button{
          width: 30%;
          background: linear-gradient(to bottom right, green, greenyellow);
          &:hover{
            background: linear-gradient(to top left, green, greenyellow);
          }
        }
        span{
          font-size: .9rem;
          color: red;
        }
      }
    }
  }

</style>