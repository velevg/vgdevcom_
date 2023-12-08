@include('layouts.components.head')

<body>
    @include('layouts.components.nav')
    <h1 class="text-center text-white">Welcome, {{ Auth::user()->name }}</h1>
</body>

</html>
