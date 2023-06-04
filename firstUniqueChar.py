def firstUniqueChar(s):
    char_count = {}

    for ch in s:
        if ch not in char_count:
            char_count[ch] = 1
        else:
            char_count[ch] += 1

    # find which one first unique char..
    for i in range(len(s)):
        ch = s[i]
        if char_count[ch] == 1:
            return i
        
    return -1


if __name__ == "__main__":
    s = "loveleetcode"

    print(firstUniqueChar(s))