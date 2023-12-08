<aside>
    <menu>
        <nav class="main-nav bg-dark">
            <ul class="nav d-flex justify-content-center align-items-center">
                @if (Route::has('login'))
                    @auth
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('home') }}">Home</a>
                        </li>
                    @else
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('login') }}">Login</a>
                        </li>
                        @if (Route::has('register'))
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('register') }}">Register</a>
                            </li>
                        @endif
                    @endauth
                @endif
                @if (Route::has('logout'))
                    @auth
                        <li class="nav-item">
                            <form action="{{ route('logout') }}" method="POST">
                                @csrf
                                @method('DELETE')
                                <button class="nav-link">Logout</button>
                            </form>
                        </li>
                    @endauth
                @endif
            </ul>
        </nav>
    </menu>
</aside>
