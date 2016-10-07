/**

Meeting Rooms I

Given an array of meeting time intervals consisting of start and end times
[[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.

For example,
Given [[0, 30],[5, 10],[15, 20]],
return false.

 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    // intervals.sort((interval1, interval2) => {
    //     return interval1.start - interval2.start;
    // });
    mergeSort(intervals, [], 0, intervals.length - 1);
    var end = -1;
    for(var i = 0; i < intervals.length; i++) {
        if (intervals[i].start < end) {
            return false;
        } else {
            end = intervals[i].end;
        }
    }

    return true;
};

var mergeSort = function(intervals, helper, low, high) {
    var middle;
    if (low < high) {
       middle = Math.floor((low + high) / 2);
       mergeSort(intervals, helper, low, middle);
       mergeSort(intervals, helper, middle + 1, high);
       merge(intervals, helper, low, middle, high);
    }
}

var merge = function(intervals, helper, low, middle, high) {
    for (var i = low; i <= high ; i++) {
        helper[i] = intervals[i];
    }

    var helperLeft = low;
    var helperRight = middle + 1;
    var currentIx = low;

    while (helperLeft <= middle && helperRight <= high) {
        if (helper[helperLeft].start <= helper[helperRight].start) {
            intervals[currentIx] = helper[helperLeft];
            helperLeft++;
        } else {
            intervals[currentIx] = helper[helperRight];
            helperRight++;
        }
        currentIx++;
    }

    while (helperLeft <= middle) {
        intervals[currentIx] = helper[helperLeft];
        helperLeft++;
        currentIx++;
    }
}