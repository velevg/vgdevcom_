@include('layouts.components.head')

<body>
    <div class="row m-auto h-100">
        <div class="col-12 d-flex justify-content-center align-items-center w-100">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Login</h5>
                </div>
                <div class="card-body">
                    @if (Session::has('error'))
                        <div class="alert alert-danger">
                            {{-- msg pri success ot AuthController fun loginPost --}}
                            {{ Session::get('error') }}
                        </div>
                    @endif
                    <form action="{{ route('login') }}" method="POST">
                        @csrf
                        <div class="input-group mb-3">
                            <div class="form-floating">
                                <input type="email" name="email" class="form-control" placeholder="Email">
                                <label for="email">Email</label>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <div class="form-floating">
                                <input type="password" name="password" class="form-control" placeholder="Password">
                                <label for="password">Password</label>
                            </div>
                        </div>
                        <div class="d-flex justify-content-end">
                            <button class="btn btn-success">Login</button>
                        </div>
                    </form>
                </div>
                <div class="card-footer">
                    <span>Don't have an account? <a href="{{ route('register') }}">Register</a></span>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
