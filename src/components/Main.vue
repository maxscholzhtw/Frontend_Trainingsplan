<script setup lang="ts">

</script>

<template>
<Login>
  <div class="login-container">
    <h2>Login</h2>
      <div class="login-innercontainer">
        <label for="username">Benutzername:</label><br>
        <input type="text" id="username" name="username" required>
      </div>
      <div class="login-innercontainer">
        <label for="password">Passwort:</label><br>
        <input type="password" id="password" name="password" required>
      </div>
      <div class="login-innercontainer">
        <RouterLink to="/workoutlist">Anmelden</RouterLink>
      </div>
  </div>
</Login>
</template>

<style>

body{
  display: grid;
  align-content: center;
  overflow: hidden;
}

.login-container{
  display: grid;
  justify-content: center;
  align-items: center;
}

.login-innercontainer{
  padding: 10px 0px 10px 0px;
}

a{
  color: hsl(210.98deg 55.34% 68.59%);
}

h2{
  text-align: center;
}
</style>

