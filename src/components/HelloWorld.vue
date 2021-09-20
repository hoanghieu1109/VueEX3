<template>
    <div class="starts">
            <div class="starts-text">
                <h2>Regist classes</h2>
                <h1>big deal only in june - 10 days free</h1>
                <p>to celebrate the international</p>
                <span>limited offers! this deal will ends</span>
                <div class="calendar">
                    <div class="calendar-item">
                        <h1>01</h1>
                        <span>Name</span>
                    </div>
                    <div class="calendar-item">
                        <h1>01</h1>
                        <span>phone</span>
                    </div>
                    <div class="calendar-item">
                        <h1>01</h1>
                        <span>email</span>
                    </div>
                    <div class="calendar-item">
                        <h1>01</h1>
                        <span>class</span>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
    
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
  <style>
       
        .starts-text h1{
            font-size: 20px;
        }
        .starts-text h2 {
            font-size: 14px;
        }
        .starts-text p {
            font-size: 12px;
        }
        .starts-text span {
            font-size: 12px;
        }
        .starts .calendar {
            display: flex;
            justify-content: space-between;
            text-align: center;
            border: 1px solid #ccc;
            margin-top: 20px;
            border-radius: 10px;
        }
        .calendar-item {
            margin: 10px 30px;
        }
        .calendar-item h1 {
            color: darkblue;
        }
        .calendar-item span {
            color: #999;
        }
    
    </style>