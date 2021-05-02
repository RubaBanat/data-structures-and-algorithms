# Insertion Sort

**Trace**

sample Array : [8,4,23,42,16,15]

## pass 1 : 

*In the first iteration we see if there is a smaller value in the array than what is currently in index 0 . then you will find the smaller value in index 1 . The minimum value gets updated to remember this index. At the end of the evaluation, the smaller number will be swapped with the current value in index i. This results in our smallest number of our array being placed first.*

![one](/assets/1.png)

---

## pass 2 :

*The second iteration in the array evaluates the remaining values in the array to see if there is a smaller value other than the current position of i. 8 is the 2nd smallest number in the array, so it “swaps” with itself. The minimum value does not change at all during the iteration of this pass.*

![two](/assets/2.png)

---

## pass 3 : 

*The third iteration evaluates the remaining indexes in the array, starting at position 2. Both position 4 and 5 are smaller than the value in position 2. Each time a smaller number than the current minimum is found, the variable will update to the new smallest number. In this case, 15 is the next smallest number. As a result, it will swap with position 2.*

![three](/assets/3.png)

---

## pass 4 : 

*The 4th iteration through on the array proves that 16 is the next smallest number in the array, and as a result, switches places with the 42.*

![four](/assets/4.png)

---

## pass 5 : 

*The 5th iteration through of the array only has one other index to evaluate. Since the last index value is larger than index 4, the two values will swap.*

![five](/assets/5.png)

---

## pass 6 :

*On its final iteration through the array, it will swap places with itself as it evaluates the value against itself.*

![six](/assets/6.png)

---

# Whiteboard 

![sort](/assets/ccsort.png)


---

# THE END