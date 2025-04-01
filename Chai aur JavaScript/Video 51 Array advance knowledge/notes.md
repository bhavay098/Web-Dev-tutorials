# There are 2 types of arrays in JS

## 1. Continuous Array (packed array)
A continuous array has elements at every index without any gaps. The indices are sequential, meaning there are no missing (empty) slots.

## 2. Holey Array
A holey array has one or more missing elements, meaning there are gaps (holes) in the index sequence.  

**Effects of Holey Arrays:**
- Slower Performance: JavaScript engines optimize continuous arrays better than holey arrays.
- Unexpected Behavior: Some methods may behave differently.<br><br>

# JavaScript engines optimize arrays by categorizing them into packed and holey representations.

## (A) Packed Arrays
A packed array is an optimized array where all indices are filled without holes. It is stored in contiguous memory, making access fast.  

### Types of Packed Arrays:

**1. Packed SMI (Packed Small Integer):** 
- SMI stands for Small Integer. It contains only small integers and no decimal numbers. It is the most optimized storage format.

**2. Packed Double:** 
- If you insert decimal numbers in packed SMI, it gets converted into packed double

**2. Packed Elements:**
- Contains mixed data types (e.g., numbers & strings).

**✅ Packed arrays are highly optimized and fast because they are stored contiguously in memory.**

## (B) Holey Arrays
A holey array has missing (empty) slots, making it less efficient because the JavaScript engine must handle the gaps.

### Types of Holey Arrays:

**1. Holey SMI**   
**2. Holey DOUBLE**   
**3. Holey ELEMENTS** 

**🚨 Holey arrays are de-optimized because:**
- They can no longer be stored in a contiguous block.
- Access time increases because the engine must check for missing elements.