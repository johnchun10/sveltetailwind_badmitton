<!DOCTYPE html>
<html lang="en" data-theme = "cupcake">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-xl">Badmitton</a>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-lg menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
                <li><a>About Us</a></li>
                <li><a>Bracket</a></li>
                <li><a>UpdatedPleaseWorkBreh</a></li>
            </ul>
        </div>
        <div class="navbar-end">
        </div>
    </div>
</body>
<script>
	import Hero from '../components/Hero.svelte';
</script>

</html>