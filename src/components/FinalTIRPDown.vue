<template>
  <div class="final-tirp-down">
    <p class="countDown">Only {{ classesRemaining}} classes left! {{ countDown }} remaining!</p>
  </div>
</template>

<script>
import { DateTime } from 'luxon'
import { Interval } from 'luxon'
import _ from 'underscore'
import store from '../store'


var formatDuration = function (duration) {

  var durationString = "";

  var durationObj = duration.toObject();

  var formatDurationElement = function (label, value, isLast, isSecondLast) {
    var formattedLabel = value !== 1 ? label  : label.substring(0, label.length - 1);
    var separator = isSecondLast ? " and " : isLast ? "" : ", ";
    if(value) {
      var value = Math.round(value);
      durationString = durationString + `${value} ${formattedLabel}${separator}`
    }
  };

  var durationElements = ["years", "months", "days", "hours", "minutes", "seconds"];

  _.each(durationElements, function (value, key) {
    var isLast = value === "seconds" ? true : false;
    var isSecondLast = value === "minutes" ? true : false;
    formatDurationElement(value, durationObj[value], isLast, isSecondLast);
  });

  // console.log(durationString);

  return durationString;
}
export default {
  name: 'FinalTIRPDown',
  computed: {
   now () {
     return store.state.now;
   },
   classesRemaining() {
       var future = DateTime.fromISO(this.countdownToDate);

 var now = this.now;

     var i = Interval.fromDateTimes(now, future);

 var hoursRemaining = i.count("hours");

 var classesRemaining = Math.ceil(hoursRemaining / 24 / 7);

     return classesRemaining;
   },
   countdownToDate() {
     return store.state.countdownToDate;
   },
   countDown () {
       var future = DateTime.fromISO(this.countdownToDate);

 var now = this.now;

 var i = Interval.fromDateTimes(now, future);

var duration = i.toDuration(['years', 'months', 'days', 'hours', 'minutes', 'seconds']);

   return formatDuration(duration);
 }
   }
}

window.setInterval(function() {
  store.commit('update')}, 1000);

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
