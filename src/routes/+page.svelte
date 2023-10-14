<!DOCTYPE html>
<html lang="en" data-theme = "retro" class = "scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
  <!-- Navbar -->
  <div class = "relative">
    <div class="navbar bg-base-300 absolute z-50">
      <div class = "navbar-start">
        <a href = "/" class="btn btn-ghost normal-case text-xl">Bergen County Badminton</a>
      </div>
      <div class = "navbar-center ">
        <div class="flex-none">
          <ul class="menu menu-horizontal px-1 font-semibold">
            <li><a data-sveltekit-replacestate href="#us">About Us</a></li>
            <li><a data-sveltekit-replacestate href="#events">Events</a></li>
            <li><a data-sveltekit-replacestate href="#members">Our Members</a></li>
          </ul>
        </div>
      </div>
      <div class="navbar-end">
      </div>
    </div>
    <!-- Hero -->
    <div class="hero min-h-screen absolute">
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content z-50">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Welcome to Bergen County Badminton!</h1>
        </div>
      </div>
    </div>
    <header class="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
      <video autoplay loop muted class="absolute z-10 w-auto min-w-full min-h-full max-w-none">
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </header>
  </div>
  
  <div class="flex flex-col w-full border-opacity-50">
    <div class="divider text-2xl font-bold" id = "us">About Us</div>
      <div>
        <div>
          <img src = "../sky.jpg" alt="luke"/>
        </div>
        <article>
          <p class="">Bergen County Badminton is an organization based in New Jersey that is all things badminton. We organize fundraisers for equipment and fun events for high-school students to branch out while playing badminton.  We are open to all skill levels and locations and hope to have fun playing the sport and connect with people through the game.</p>
        </article>
        
      </div>

    <div class="divider text-2xl font-bold" id = "events">Events</div>

    <div class="divider text-2xl font-bold" id = "members">Our Members</div>
      <div class="flex w-full">
        <div class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">content</div>
        <div class="divider divider-horizontal"></div>
        <div class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">content</div>
      </div>
  </div>

  <!-- Back up -->
  <a href = "#" class="btn btn-square bottom-5 right-5 !fixed">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
    </svg>
  </a>
    
</body>
<script>
	import Hero from '../components/Hero.svelte';
</script>

</html>