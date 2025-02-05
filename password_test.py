def calculate_password_score(password):
    score = 0
    length = len(password)
    
                                                                        # Length contributes up to 3 points
    if length >= 8:
        score += 3
    elif length >= 6:
        score += 2
    
                                                                        # Uppercase letters contribute 2 points if present
    has_upper = any(c.isupper() for c in password)
    if has_upper:
        score += 2
    
                                                                        # Lowercase letters contribute 1 point if present
    has_lower = any(c.islower() for c in password)
    if has_lower:
        score += 1
    
                                                                        # Digits contribute 1 point if present
    has_digit = any(c.isdigit() for c in password)
    if has_digit:
        score += 1
    
                                                                        # Special characters (non-alphanumeric) contribute 2 points if present
    has_special = False
    for c in password:
        if not c.isalnum():
            has_special = True
            break
    if has_special:
        score += 2
    
                                                                        # Extra points for longer passwords (up to an additional 2 points)
    if length >= 16:
        score += 2
    elif length >= 12:
        score += 1
    
                                                                        # Cap the score at a maximum of 10
    return min(score, 10)