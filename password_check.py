def password_tests_check(password):
    score = [False, False, False, False, False]
    length = len(password)
    
                                                                        # Test for atleast 8 characters
    if length >= 8:
        score[0] = True
    
                                                                        # Test for uppercase
    has_upper = any(c.isupper() for c in password)
    if has_upper:
        score[1] = True
    
                                                                        # test for lowercase
    has_lower = any(c.islower() for c in password)
    if has_lower:
        score[2] = True
    
                                                                        # test for numbers
    has_digit = any(c.isdigit() for c in password)
    if has_digit:
        score[3] = True
    
                                                                        # test for special characters
    has_special = False
    for c in password:
        if not c.isalnum():
            has_special = True
            break
    if has_special:
        score[4] = True
    
    
                                                                        
    return score                                                        # outputs a python list of True and False 