/**

Meeting Rooms II

Given an array of meeting time intervals consisting of start and end times
[[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

For example,
Given [[0, 30],[5, 10],[15, 20]],
return 2.

 *
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    mergeSort(intervals, [], 0, intervals.length - 1);
    var rooms = [];
    var needNewRoom;
    var numRooms = 0;
    intervals.forEach(interval => {
        needNewRoom = true;
        for (var i = 0; i < rooms.length; i++) {
            if (rooms[i] <= interval.start) {
                rooms[i] = interval.end;
                needNewRoom = false;
                break;
            }
        }
        if (needNewRoom) {
            rooms.push(interval.end);
            numRooms += 1;
        }
    });

    return numRooms;
};

var mergeSort = function(array, helper, low, high) {
    var middle;
    if (low < high) {
        middle = Math.floor((low + high) / 2);
        mergeSort(array, helper, low, middle);
        mergeSort(array, helper, middle+1, high);
        merge(array, helper, low, middle, high);
    }
};

var merge = function(array, helper, low, middle, high) {
    for (var i = low; i <= high; i++) {
        helper[i] = array[i];
    }

    var helperLeft = low;
    var helperRight = middle + 1;
    var currentIx = low;

    while (helperLeft <= middle && helperRight <= high) {
        if (helper[helperLeft].start <= helper[helperRight].start) {
            array[currentIx] = helper[helperLeft];
            helperLeft++;
        } else {
            array[currentIx] = helper[helperRight];
            helperRight++;
        }
        currentIx++;
    }

    while (helperLeft <= middle) {
        array[currentIx] = helper[helperLeft];
        helperLeft++;
        currentIx++;
    }
}