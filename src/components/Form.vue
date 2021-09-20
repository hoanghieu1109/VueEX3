<template>
        <div class="starts-form">
                <!-- <h1>demo</h1> -->
                <form action="">
                    <div class="form-control">
                        <h6>your name</h6>
                        <input type="text" name="name" placeholder="your name">
                    </div>
                    <div class="form-control">
                        <h6>your phone</h6>
                        <input type="text" name="name" placeholder="your phone">
                    </div>
                    <div class="form-control">
                        <h6>your email</h6>
                        <input type="email" name="name" placeholder="your email">
                    </div>
                    <div class="form-control">
                        <h6>your class</h6>
                        <input type="text" name="name" placeholder="your class">
                    </div>
                    <div class="send">
                        <button class="btn btn-primary" type="submit"> send</button>
                    </div>
                   
                </form>
            </div>
</template>

<script>

export default ({
  
})
</script>

<style>
    
        .starts-form h1 {
            padding: 40px;
        }

        .starts-form form {
            padding: 0 40px;
        }

        .starts-form .form-control {
            margin: 30px 0;
        }

        .starts-form h6 {
            margin: 10px 0;
            font-size: 20px;
            color: darkblue;
        }

        .starts-form input {
            border: 0;
            border-bottom: 1px solid #999;
            width: 100%;
            padding: 5px;
            font-size: 16px;
            outline: none;
        }

        .send {
            display: flex;
            justify-content: center;
        }
        .btn {
          cursor: pointer;
        }
        .btn:hover {
          background: darkblue;
          transition: 0.3s ease-in;
        }

</style>
