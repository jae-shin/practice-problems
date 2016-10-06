# Sorting Algorithms

## Table of Contents
Merge Sort,
Quick Sort,
Bucket Sort (Radix Sort),
Heap Sort,
Selection Sort,
Insertion Sort,
Bubble Sort

## Merge Sort

Average: `O(n log(n))`
Worst Case: `O(n log(n))`
Best Case: `O(n log(n))`

### Algorithm:
1. Split the array in two halves.
2. Mergesort the two halves separately.
3. Merge the two sorted halves.

## Quick Sort

Average: `O(n log(n))`
Worst Case: `O(n^2)`
Best Case: `O(n log(n))`

### Algorithm:
1. Choose the pivot element.
2. Sort the array with respect to the pivot by swapping larger values on the left of the pivot with the smaller values on the right of the pivot.
3. Quicksort the two halves recursively.

## Bucket Sort (Radix Sort)

Average: `O(kn)`
(`n` is the number of elements and `k` is the number of passes of the sorting algorithm.
For each pass of the algorithm, it is a O(1) operation to sort each element since we just have to insert it into the right bucket.)

### Algorithm:
Sorting algorithm for integers.
1. Sort by the first digit.
2. Within each bucket sort by the second digit, and so forth.

## Heap Sort

Average: `O(n log(n))`
Worst Case: `O(n log(n))`
Best Case: `O(n log(n))`

### Algorithm:
1. Build a min heap from the given array
2. Extract the root from the min heap and push to sorted array until heap is empty
3. Return sorted array

## Selection Sort

Average: `O(n^2)`
Worst Case: `O(n^2)`
Best Case: `O(n^2)`

### Algorithm:
Gradually build the sorted portion at the beginning of the array
1. Find the smallest element of the unsorted portion with a linear search.
2. Swap the found smallest element with the first element of the unsorted portion.
3. Repeat with the truncated unsorted portion until all sorted.

## Insertion Sort

Average: `O(n^2)`
Worst Case: `O(n^2)`
Best Case: `O(n)`

### Algorithm:
Gradually build the sorted portion at the beginning of the array
1. Select the first element of the unsorted portion.
2. Linearly traverse the sorted portion from the end until find correct position for the current element.
3. Insert current element in the sorted portion and contine with the rest of the unsorted portion.

## Bubble Sort

Average: `O(n^2)`
Worst Case: `O(n^2)`
Best Case: `O(n^2)`

### Algorithm:
Gradually build the sorted portion at the end of the array
1. Starting from the first element of the array compare with the next element and swap if need be.
2. Continue with the second element and so forth.


