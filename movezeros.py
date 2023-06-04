def moveZeroes(arr):
    """
    Do not return anything, modify nums in-place instead.
    """
    n = len(arr)
    i= 0
    while i < n:
        if arr[i] == 0:
        
            j = i + 1
            while j < n:
                if arr[j] != 0:
                    # swap values..
                    arr[i], arr[j] = arr[j], arr[i]
                    break


                j += 1
        i += 1
    
    return


# driver code..
if __name__ == "__main__":
    arr = [0,1,0,3,12]
    moveZeroes(arr)

    print(arr)







