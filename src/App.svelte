<div class='font-sans-light antialiased'>
  <header class='m-lg'>
    <h1 class='text-6xl leading-heading'>Svelte + TailwindCSS</h1>
  </header>

  <main>
    <div class='grid grid-cols-6 gap-4 sm:grid-cols-1 sm:gap-1 m-lg'>
      <div class='col-span-1'>
        <h4 class='text-3xl'>Typography</h4>
      </div>
      <div class='col-span-5 sm:col-span-1'>
        <h1 class='text-6xl'>Heading 1</h1>
        <h2 class='text-5xl'>Heading 2</h2>
        <h3 class='text-4xl'>Heading 3</h3>
        <h4 class='text-3xl'>Heading 4</h4>
        <h5 class='text-2xl'>Heading 5</h5>
        <h6 class='text-1xl'>Heading 6</h6>
        <p class='text-base'>Paragraph</p>
      </div>
    </div>
    
    <div class='grid grid-cols-6 gap-4 sm:grid-cols-1 sm:gap-1 m-lg'>
      <div class='col-span-1'>
        <h4 class='text-3xl'>Components</h4>
      </div>
      <div class='col-span-5 sm:col-span-1'>
        <h4 class='text-3xl'>Buttons</h4>
        <div class='flex font-sans-regular'>
          <button class='bg-blue text-white border-transparent hover:bg-dark-blue'>Primary button</button>
          <button class='bg-grey text-white border-transparent hover:bg-lighter-grey'>Secondary button</button>
          <button class='bg-white text-blue border-blue hover:bg-dark-blue hover:text-white'>Tertiary button</button>
          <button class='bg-white text-blue border-transparent hover:bg-light-grey'>Ghost button</button>
          <button class='bg-red text-white border-transparent hover:bg-dark-red'>Danger button</button>
        </div>
      </div>
    </div>
  </main>
</div>


<style global lang='postcss'>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @layer base {
    @font-face {
      font-family: 'IBM Plex Sans Light';
      font-style: normal;
      font-weight: 300;
      src: local('IBM Plex Sans Light'), local('IBMPlexSans-Light'),
        url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYX9KVElMYYaJe8bpLHnCwDKjXr8AIFsdP3pBms.woff2)
          format('woff2');
    }

    @font-face {
      font-family: 'IBM Plex Sans';
      font-style: normal;
      font-weight: 400;
      src: local('IBM Plex Sans'), local('IBMPlexSans'),
        url(https://fonts.gstatic.com/s/ibmplexsans/v6/zYXgKVElMYYaJe8bpLHnCwDKhdHeFaxOedc.woff2)
          format('woff2');
    }
  }

  button {
    padding: calc(.875rem - 3px) 63px calc(.875rem - 3px) 15px;
    @apply w-full text-left no-underline outline-none border my-sm text-sm min-h-btn max-w-btn whitespace-nowrap;
  }
  button:not(:last-of-type) {
    @apply mr-md;
  }

  h1, h2, h3, h4, h5, h6, p {
    @apply pb-5;
  }
</style>