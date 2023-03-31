refrenece:
    1) https://elfsight.com/blog/2015/10/get-instagram-client-id-guide/

    2) https://elfsight.com/blog/2016/05/how-to-get-instagram-access-token/

    3) https://developers.facebook.com/docs/instagram-basic-display-api/guides/getting-profiles-and-media/

    4) https://developers.facebook.com/docs/instagram-basic-display-api/reference/media#fields

    5) https://developers.facebook.com/docs/instagram-basic-display-api/guides/getting-access-tokens-and-permissions

    6) https://developers.facebook.com/docs/instagram-basic-display-api/reference/refresh_access_token


    
//authorize with permission for the insta app
https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=939f9b79af43beade1885487197d4c9e&access_token=IGQVJWYnFCWHhhV2RoSTZAuZAnRpSkpka3ZAzMFk1Q3cwMWZApWjgtbWhuUlEyclBsT2J2TDRDczJCNTA0MGtqTjBiQ1ZALbkI3Vk81ODExQ2ZATVmtZAWkJscHh2N1oyY3d2a05ldDl5dG5RZA3YyTFJzanNLUkZAHenZAndjdyY1NF



///to access the user insta info
https://graph.instagram.com/me/media?fields=id,caption,media_url,username&access_token=IGQVJXcFNCbG9OMFdvY2ZAqUXpXU3NCMmlGaGdNYV9KTnU1U3hONlBEa1Y4bWx2SmtDTzFVXzcwMm00YXNtenlpQWdiYUQ5RXFVemIyMk9vVDZAJNkRiN1RDQnRydkJNTGdCd2dBa2dn&limit=2


//to get the Authorization code which u can use to request an accesst token
https://api.instagram.com/oauth/authorize?client_id=1169149630426634&redirect_uri=https://www.consciouscreatures.earth/home&scope=user_profile,user_media&response_type=code


//use the below CODE to get the access toekn
https://www.consciouscreatures.earth/home?code=AQDyE1RISNv9g7Y7c8LUgSrTSXhkOG3_Hi8_jE24eIoI_11Vf0nLbhhCaUBt4vSQmUkJjQjzmkkyRKFDa3GvrrySyXAwafWD_JKs7p3iGH0mhhPhEgqe8fns40vmQbsKRP4tL8c7l6WZId4NYPDEjiUXliN-5vh6apSw6AFcXA6NOJ35NfhzE0hr2SbxOtv3s7apTk77ph91wYPlHVLzJOsQTpuTKZDXp2bGGmgv41uIYQ#_



//get the CESS TOEKN
curl -X POST \ https://api.instagram.com/oauth/access_token \ -F client_id=1169149630426634 \ -F client_secret=939f9b79af43beade1885487197d4c9e \ -F grant_type=authorization_code \ -F redirect_uri=https://www.consciouscreatures.earth/home \ -F code=AQDyE1RISNv9g7Y7c8LUgSrTSXhkOG3_Hi8_jE24eIoI_11Vf0nLbhhCaUBt4vSQmUkJjQjzmkkyRKFDa3GvrrySyXAwafWD_JKs7p3iGH0mhhPhEgqe8fns40vmQbsKRP4tL8c7l6WZId4NYPDEjiUXliN-5vh6apSw6AFcXA6NOJ35NfhzE0hr2SbxOtv3s7apTk77ph91wYPlHVLzJOsQTpuTKZDXp2bGGmgv41uIYQ



//ACCESS TOKEN
{
"access_token": 	 	
"IGQVJVcVZAmN2djZAjltVTU1c1NKMGd0RWhsWk04TDdfUERBS0dKYW50NlZAOUThIZAHFyeEVKRlpidlp2bzl5MEZAhTXlRd	HpHdWpRY2xRYm41QlZA0X1JqR1NnR29oTS0wZA3I5SFdNMkN3VDlCcURmSTV2WUZA1Q0Y2T29QbUhv", 

"user_id": 17841458747310704
}


//request for a long-lived access toekn using the above short-lived access token
https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=939f9b79af43beade1885487197d4c9e&access_token=IGQVJVcVZAmN2djZAjltVTU1c1NKMGd0RWhsWk04TDdfUERBS0dKYW50NlZAOUThIZAHFyeEVKRlpidlp2bzl5MEZAhTXlRdHpHdWpRY2xRYm41QlZA0X1JqR1NnR29oTS0wZA3I5SFdNMkN3VDlCcURmSTV2WUZA1Q0Y2T29QbUhv


//long-lived-access-token
{
  "access_token": "IGQVJYNjBETGx0cDJJSXM2Vm5xUGJwbmY1N1U0UVVEZAVJFRExYNlIxODhuakMxc1FVSDBjTFlpWC0tQkNxT1dsSjFSUFZAzY2ZAkQ2xqdFVBNUZAxTnBjUEJsREgweFFLa1A1RjZAVdDVR",
  "token_type": "bearer",
  "expires_in": 5184000 //60 days
}


//refresh the long-lived access token using the above long-lived-access-token
https://graph.instagram.com/refresh_access_token
  ?grant_type=ig_refresh_token
  &access_token={long-lived-access-token}





  //TO ADD A NEW INSTA ACCOUNT FOR THE INTERRGRATION:
    1) ipen up your facebook developers account
    2) go to your apps
    3) click on the app
    4) go to instagram basic display
    5) click on Basic Display
    6) scroll down to user token generator
    7) click on add or remove instgram tester
    8) remove the account and add a new one with the username
    9) after that login to your insta account on dersktop inst website
    10) go to settings -> website and apps -> tester -> accept the invite
    11) then floow the above steps to get the access token and all