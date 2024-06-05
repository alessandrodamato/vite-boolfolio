<script>
  export default {
    name: 'Contacts'
  }
</script>



<template>
  <div class="main-wrapper container">
    <form>
      <div class="form-image"></div>
      <div class="form-inputs">
        <h2>Contattaci</h2>
        <input type="text" placeholder="Nome">
        <input type="text" placeholder="Cognome">
        <input type="text" placeholder="Email">
        <textarea rows="4" placeholder="Messaggio"></textarea>
        <button type="submit">Invia email</button>
      </div>
    </form>
  </div>
</template>



<style lang="scss" scoped>

  .main-wrapper{
    padding: 50px;
    text-align: center;
    h1{
      margin-bottom: 30px;
    }
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
          margin: 15px 0;
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
      }
    }
  }

</style>