from fastapi import Header, HTTPException

async def get_token_header(x_token: str = Header(...)):
    if x_token != "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iL":
        raise HTTPException(status_code=400, detail="X-Token header invalid")