@include('layouts.components.head')

<body>
    <div class="row m-auto h-100">
        <div class="col-12 d-flex justify-content-center align-items-center">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Register</h5>
                </div>
                <div class="card-body">
                    @if (Session::has('success'))
                        <div class="alert alert-success">
                            {{-- msg pri success ot AuthController fun registerPost --}}
                            {{ Session::get('success') }}
                        </div>
                    @endif
                    <form action="{{ route('register') }}" method="POST">
                        @csrf
                        <div class="input-group mb-3">
                            <div class="form-floating">
                                <input type="text" name="name" class="form-control" placeholder="Name">
                                <label for="name">Name</label>
                            </div>
                        </div>
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
                            <button class="btn btn-success">Register</button>
                        </div>
                    </form>
                </div>
                <div class="card-footer">
                    <span>Already have an account? <a href="{{ route('login') }}">Login</a></span>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
