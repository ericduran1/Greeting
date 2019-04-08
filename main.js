var today = new Date;

var hour = today.getHours();

if (hour < 12) {
    document.write("Good morning Human!");
    } else if (hour >= 12 && hour < 16) {
      document.write('Good afternoon Human!');
    } else if (hour >= 16 && hour <= 24) {
      document.write('Good Evening Human!');
    }
