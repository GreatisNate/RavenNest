var data = {"settings":{"name":"RavenNest API Documentation","version":"v1.0"},"pages":[],"apis":[{"name":"Authentication API","description":"Used for authenticating with the RavenNest API.","path":"api/auth","methods":[{"name":"Check current authentication state","method":"GET","path":"/","description":"Doing a GET to this api will return whether or not you are logged in and can use the RavenNest API.","parameters":[],"authentication":{"requiresTwitch":false,"requiresAuth":false,"requiresSession":false,"requiresAdmin":false},"requestBody":null,"response":{"contentType":"application/json","returnType":"System.String","example":"\"\""}},{"name":"Authenticate","method":"POST","path":"/","description":"Authenticate to RavenNest API and retrieve an auth token. The auth token is required for many of the available APIs. This method be called every hour or so to keep your auth token valid.","parameters":[],"authentication":{"requiresTwitch":false,"requiresAuth":false,"requiresSession":false,"requiresAdmin":false},"requestBody":{"contentType":"application/json","example":"{\"username\":null,\"password\":null}"},"response":{"contentType":"application/json","returnType":"AuthToken","example":"{\"userId\":\"00000000-0000-0000-0000-000000000000\",\"issuedUtc\":\"0001-01-01T00:00:00\",\"expiresUtc\":\"0001-01-01T00:00:00\",\"token\":null,\"expired\":true}"}},{"name":"Login","method":"POST","path":"/login","description":"Authenticate with RavenNest Website using a username/password combination","parameters":[],"authentication":{"requiresTwitch":false,"requiresAuth":false,"requiresSession":false,"requiresAdmin":false},"requestBody":{"contentType":"application/json","example":"{\"username\":null,\"password\":null}"},"response":{"contentType":"application/json","returnType":"SessionInfo","example":"{\"id\":\"00000000-0000-0000-0000-000000000000\",\"userId\":null,\"userName\":null,\"authenticated\":false,\"requiresPasswordChange\":false}"}},{"name":"Logout","method":"GET","path":"/logout","description":"Clears the current logged in website session","parameters":[],"authentication":{"requiresTwitch":false,"requiresAuth":false,"requiresSession":false,"requiresAdmin":false},"requestBody":null,"response":{"contentType":"application/json","returnType":"RavenNest.Sessions.SessionInfo","example":"{\"id\":\"00000000-0000-0000-0000-000000000000\",\"userId\":null,\"userName\":null,\"authenticated\":false,\"requiresPasswordChange\":false}"}},{"name":"Signup","method":"POST","path":"/signup","description":"First time user setup requires to assign a password","parameters":[],"authentication":{"requiresTwitch":true,"requiresAuth":false,"requiresSession":false,"requiresAdmin":false},"requestBody":{"contentType":"application/json","example":"{\"password\":null}"},"response":{"contentType":"application/json","returnType":"SessionInfo","example":"{\"id\":\"00000000-0000-0000-0000-000000000000\",\"userId\":null,\"userName\":null,\"authenticated\":false,\"requiresPasswordChange\":false}"}}]},{"name":"Server","description":null,"path":"api/server","methods":[{"name":"BroadcastMessageAsync","method":"POST","path":"/message","description":null,"parameters":[],"authentication":{"requiresTwitch":false,"requiresAuth":false,"requiresSession":false,"requiresAdmin":false},"requestBody":{"contentType":"application/json","example":"\"\""},"response":{"contentType":"application/json","returnType":"Void","example":"{}"}}]},{"name":"Game","description":null,"path":"api/game","methods":[{"name":"GetAsync","method":"GET","path":"/","description":null,"parameters":[],"authentication":{"requiresTwitch":false,"requiresAuth":false,"requiresSession":false,"requiresAdmin":false},"requestBody":null,"response":{"contentType":"application/json","returnType":"GameInfo","example":"{\"userId\":null,\"uptime\":\"00:00:00\",\"peakPlayerCount\":0,\"playerCount\":0,\"eventRevision\":0}"}},{"name":"BeginSessionAsync","method":"POST","path":"/:clientVersion/:accessKey","description":null,"parameters":[{"type":"String","name":"clientVersion","description":"","default":"","optional":false},{"type":"String","name":"accessKey","description":"","default":"","optional":false}],"authentication":{"requiresTwitch":false,"requiresAuth":false,"requiresSession":false,"requiresAdmin":false},"requestBody":{"contentType":"application/json","example":"{\"Value\": false}"},"response":{"contentType":"application/json","returnType":"SessionToken","example":"{\"sessionId\":\"00000000-0000-0000-0000-000000000000\",\"startedUtc\":\"0001-01-01T00:00:00\",\"expiresUtc\":\"0001-01-01T00:00:00\",\"authToken\":null,\"expired\":true}"}},{"name":"EndSessionAndRaidAsync","method":"DELETE","path":"/raid/:username","description":null,"parameters":[{"type":"String","name":"username","description":"","default":"","optional":false}],"authentication":{"requiresTwitch":false,"requiresAuth":false,"requiresSession":false,"requiresAdmin":false},"requestBody":{"contentType":"application/json","example":"{\"Value\": false}"},"response":{"contentType":"application/json","returnType":"Boolean","example":"false"}},{"name":"EndSessionAsync","method":"DELETE","path":"/","description":null,"parameters":[],"authentication":{"requiresTwitch":false,"requiresAuth":false,"requiresSession":false,"requiresAdmin":false},"requestBody":{"contentType":"application/json","example":"{}"},"response":{"contentType":"application/json","returnType":"Void","example":"{}"}}]},{"name":"HighScore API","description":"Used for retrieving player HighScore list.","path":"api/highscore","methods":[{"name":"Get Highscore Paging for skill","method":"GET","path":"/paged/:skill/:offset/:skip","description":"Gets a page from the highscore using an offset and skip.","parameters":[{"type":"String","name":"skill","description":"","default":"","optional":false},{"type":"Int32","name":"offset","description":"","default":"","optional":false},{"type":"Int32","name":"skip","description":"","default":"","optional":false}],"authentication":{"requiresTwitch":false,"requiresAuth":false,"requiresSession":false,"requiresAdmin":false},"requestBody":null,"response":{"contentType":"application/json","returnType":"HighScoreCollection","example":"{\"players\":null,\"skill\":null,\"offset\":0,\"total\":0}"}},{"name":"Get Highscore Paging for total","method":"GET","path":"/paged/:offset/:skip","description":"Gets a page from the highscore using an offset and skip.","parameters":[{"type":"Int32","name":"offset","description":"","default":"","optional":false},{"type":"Int32","name":"skip","description":"","default":"","optional":false}],"authentication":{"requiresTwitch":false,"requiresAuth":false,"requiresSession":false,"requiresAdmin":false},"requestBody":null,"response":{"contentType":"application/json","returnType":"HighScoreCollection","example":"{\"players\":null,\"skill\":null,\"offset\":0,\"total\":0}"}},{"name":"Top 100 Skill","method":"GET","path":"/:skill","description":"Gets the top 100 players in a particular skill. Ordered by level then by exp.","parameters":[{"type":"String","name":"skill","description":"","default":"","optional":false}],"authentication":{"requiresTwitch":false,"requiresAuth":false,"requiresSession":false,"requiresAdmin":false},"requestBody":null,"response":{"contentType":"application/json","returnType":"HighScoreCollection","example":"{\"players\":null,\"skill\":null,\"offset\":0,\"total\":0}"}},{"name":"Top 100 Players","method":"GET","path":"/","description":"Gets the top 100 players in a all/overall skill levels. Ordered by total level then by total exp.","parameters":[],"authentication":{"requiresTwitch":false,"requiresAuth":false,"requiresSession":false,"requiresAdmin":false},"requestBody":null,"response":{"contentType":"application/json","returnType":"HighScoreCollection","example":"{\"players\":null,\"skill\":null,\"offset\":0,\"total\":0}"}}]},{"name":"Items API","description":"Used for managing the items database.","path":"api/items","methods":[{"name":"Get all available items","method":"GET","path":"/","description":"This will return the list of all available items in Ravenfall. This is required as no other endpoints will give out any item data other than item id. This list of items is then necessary to do an item lookup.","parameters":[],"authentication":{"requiresTwitch":false,"requiresAuth":true,"requiresSession":false,"requiresAdmin":false},"requestBody":null,"response":{"contentType":"application/json","returnType":"RavenNest.Models.ItemCollection","example":"[{\"id\":\"00000000-0000-0000-0000-000000000000\",\"name\":null,\"level\":0,\"weaponAim\":0,\"weaponPower\":0,\"armorPower\":0,\"requiredAttackLevel\":0,\"requiredDefenseLevel\":0,\"category\":0,\"type\":0,\"material\":0,\"maleModelId\":null,\"femaleModelId\":null,\"genericPrefab\":null,\"malePrefab\":null,\"femalePrefab\":null,\"isGenericModel\":null,\"craftable\":null,\"requiredCraftingLevel\":0,\"woodCost\":0,\"oreCost\":0}]"}},{"name":"Add a new item to the database","method":"POST","path":"/","description":"This will add a new item to the game. This requires the authenticated user to be a Ravenfall administrator.","parameters":[],"authentication":{"requiresTwitch":false,"requiresAuth":true,"requiresSession":false,"requiresAdmin":true},"requestBody":{"contentType":"application/json","example":"{\"id\":\"00000000-0000-0000-0000-000000000000\",\"name\":null,\"level\":0,\"weaponAim\":0,\"weaponPower\":0,\"armorPower\":0,\"requiredAttackLevel\":0,\"requiredDefenseLevel\":0,\"category\":0,\"type\":0,\"material\":0,\"maleModelId\":null,\"femaleModelId\":null,\"genericPrefab\":null,\"malePrefab\":null,\"femalePrefab\":null,\"isGenericModel\":null,\"craftable\":null,\"requiredCraftingLevel\":0,\"woodCost\":0,\"oreCost\":0}"},"response":{"contentType":"application/json","returnType":"Boolean","example":"false"}},{"name":"Delete an item from the database","method":"DELETE","path":"/:itemId","description":"This will delete an item from the game. This requires the authenticated user to be a Ravenfall administrator.","parameters":[{"type":"Guid","name":"itemId","description":"","default":"","optional":false}],"authentication":{"requiresTwitch":false,"requiresAuth":true,"requiresSession":false,"requiresAdmin":true},"requestBody":{"contentType":"application/json","example":"{}"},"response":{"contentType":"application/json","returnType":"System.Boolean","example":"false"}},{"name":"Update an item in the database","method":"PUT","path":"/","description":"This update the target item. This requires the authenticated user to be a Ravenfall administrator.","parameters":[],"authentication":{"requiresTwitch":false,"requiresAuth":true,"requiresSession":false,"requiresAdmin":true},"requestBody":{"contentType":"application/json","example":"{\"id\":\"00000000-0000-0000-0000-000000000000\",\"name\":null,\"level\":0,\"weaponAim\":0,\"weaponPower\":0,\"armorPower\":0,\"requiredAttackLevel\":0,\"requiredDefenseLevel\":0,\"category\":0,\"type\":0,\"material\":0,\"maleModelId\":null,\"femaleModelId\":null,\"genericPrefab\":null,\"malePrefab\":null,\"femalePrefab\":null,\"isGenericModel\":null,\"craftable\":null,\"requiredCraftingLevel\":0,\"woodCost\":0,\"oreCost\":0}"},"response":{"contentType":"application/json","returnType":"System.Boolean","example":"false"}}]},{"name":"Marketplace API","description":"Used for buying and selling items in a global marketplace.","path":"api/marketplace","methods":[{"name":"Get Marketplace Listing","method":"GET","path":"/:offset/:size","description":"Gets a range of items available on the marketplace based on a set offset and size.","parameters":[{"type":"Int32","name":"offset","description":"","default":"","optional":false},{"type":"Int32","name":"size","description":"","default":"","optional":false}],"authentication":{"requiresTwitch":false,"requiresAuth":true,"requiresSession":false,"requiresAdmin":false},"requestBody":null,"response":{"contentType":"application/json","returnType":"MarketItemCollection","example":"[{\"sellerUserId\":null,\"itemId\":\"00000000-0000-0000-0000-000000000000\",\"amount\":0,\"pricePerItem\":0.0}]"}},{"name":"Sell items on the marketplace","method":"GET","path":"/:userId/sell/:itemId/:amount/:pricePerItem","description":"Adds one or more item(s) on the marketplace listing for sale. This will remove the item(s) from the players inventory.","parameters":[{"type":"String","name":"userId","description":"","default":"","optional":false},{"type":"Guid","name":"itemId","description":"","default":"","optional":false},{"type":"Int64","name":"amount","description":"","default":"","optional":false},{"type":"Decimal","name":"pricePerItem","description":"","default":"","optional":false}],"authentication":{"requiresTwitch":false,"requiresAuth":false,"requiresSession":true,"requiresAdmin":false},"requestBody":null,"response":{"contentType":"application/json","returnType":"ItemSellResult","example":"{\"state\":0}"}},{"name":"Buy items on the marketplace","method":"GET","path":"/:userId/buy/:itemId/:amount/:maxPricePerItem","description":"Buy the target item(s) with the cheapest price per item, this price cannot exceed the requested max price per item. The bought item(s) will be equipped automatically if they are better than the currently equipped item of same type.","parameters":[{"type":"String","name":"userId","description":"","default":"","optional":false},{"type":"Guid","name":"itemId","description":"","default":"","optional":false},{"type":"Int64","name":"amount","description":"","default":"","optional":false},{"type":"Decimal","name":"maxPricePerItem","description":"","default":"","optional":false}],"authentication":{"requiresTwitch":false,"requiresAuth":false,"requiresSession":true,"requiresAdmin":false},"requestBody":null,"response":{"contentType":"application/json","returnType":"ItemBuyResult","example":"{\"state\":0,\"amountBought\":null,\"costPerItem\":null,\"totalAmount\":0,\"totalCost\":0.0}"}}]},{"name":"Players API","description":"Used for managing player data.","path":"api/players","methods":[{"name":"Get Current Player","method":"GET","path":"/","description":"Gets the player data for the authenticated Twitch user, authenticated RavenNest user or current Game Session user.","parameters":[],"authentication":{"requiresTwitch":false,"requiresAuth":false,"requiresSession":false,"requiresAdmin":false},"requestBody":null,"response":{"contentType":"application/json","returnType":"Player","example":"{\"userId\":null,\"userName\":null,\"name\":null,\"statistics\":null,\"appearance\":null,\"resources\":null,\"skills\":null,\"state\":null,\"inventoryItems\":null,\"local\":false,\"originUserId\":\"00000000-0000-0000-0000-000000000000\",\"revision\":0}"}},{"name":"(Alias) Get Current Player","method":"GET","path":"/user","description":"Gets the player data for the authenticated Twitch user, authenticated RavenNest user or current Game Session user.","parameters":[],"authentication":{"requiresTwitch":false,"requiresAuth":false,"requiresSession":false,"requiresAdmin":false},"requestBody":null,"response":{"contentType":"application/json","returnType":"Player","example":"{\"userId\":null,\"userName\":null,\"name\":null,\"statistics\":null,\"appearance\":null,\"resources\":null,\"skills\":null,\"state\":null,\"inventoryItems\":null,\"local\":false,\"originUserId\":\"00000000-0000-0000-0000-000000000000\",\"revision\":0}"}},{"name":"PlayerJoinAsync","method":"POST","path":"/:userId","description":null,"parameters":[{"type":"String","name":"userId","description":"","default":"","optional":false}],"authentication":{"requiresTwitch":false,"requiresAuth":false,"requiresSession":false,"requiresAdmin":false},"requestBody":{"contentType":"application/json","example":"{\"Value\": \"\"}"},"response":{"contentType":"application/json","returnType":"Player","example":"{\"userId\":null,\"userName\":null,\"name\":null,\"statistics\":null,\"appearance\":null,\"resources\":null,\"skills\":null,\"state\":null,\"inventoryItems\":null,\"local\":false,\"originUserId\":\"00000000-0000-0000-0000-000000000000\",\"revision\":0}"}},{"name":"Get Player by Twitch UserId","method":"GET","path":"/:userId","description":"Get the target player using a Twitch UserId. This requires a session token for grabbing a local player but only an auth token for a global player.","parameters":[{"type":"String","name":"userId","description":"","default":"","optional":false}],"authentication":{"requiresTwitch":false,"requiresAuth":true,"requiresSession":false,"requiresAdmin":false},"requestBody":null,"response":{"contentType":"application/json","returnType":"Player","example":"{\"userId\":null,\"userName\":null,\"name\":null,\"statistics\":null,\"appearance\":null,\"resources\":null,\"skills\":null,\"state\":null,\"inventoryItems\":null,\"local\":false,\"originUserId\":\"00000000-0000-0000-0000-000000000000\",\"revision\":0}"}},{"name":"AddItemAsync","method":"GET","path":"/:userId/item/:item","description":null,"parameters":[{"type":"String","name":"userId","description":"","default":"","optional":false},{"type":"Guid","name":"item","description":"","default":"","optional":false}],"authentication":{"requiresTwitch":false,"requiresAuth":false,"requiresSession":false,"requiresAdmin":false},"requestBody":null,"response":{"contentType":"application/json","returnType":"AddItemResult","example":"0"}},{"name":"UnEquipItemAsync","method":"GET","path":"/:userId/unequip/:item","description":null,"parameters":[{"type":"String","name":"userId","description":"","default":"","optional":false},{"type":"Guid","name":"item","description":"","default":"","optional":false}],"authentication":{"requiresTwitch":false,"requiresAuth":false,"requiresSession":false,"requiresAdmin":false},"requestBody":null,"response":{"contentType":"application/json","returnType":"Boolean","example":"false"}},{"name":"EquipItemAsync","method":"GET","path":"/:userId/equip/:item","description":null,"parameters":[{"type":"String","name":"userId","description":"","default":"","optional":false},{"type":"Guid","name":"item","description":"","default":"","optional":false}],"authentication":{"requiresTwitch":false,"requiresAuth":false,"requiresSession":false,"requiresAdmin":false},"requestBody":null,"response":{"contentType":"application/json","returnType":"Boolean","example":"false"}},{"name":"UpdateSyntyAppearanceAsync","method":"POST","path":"/:userId/appearance","description":null,"parameters":[{"type":"String","name":"userId","description":"","default":"","optional":false}],"authentication":{"requiresTwitch":false,"requiresAuth":false,"requiresSession":false,"requiresAdmin":false},"requestBody":{"contentType":"application/json","example":"{\"id\":\"00000000-0000-0000-0000-000000000000\",\"gender\":0,\"hair\":0,\"head\":0,\"eyebrows\":0,\"facialHair\":0,\"skinColor\":null,\"hairColor\":null,\"beardColor\":null,\"eyeColor\":null,\"helmetVisible\":false}"},"response":{"contentType":"application/json","returnType":"Boolean","example":"false"}},{"name":"UpdateExperienceAsync","method":"POST","path":"/:userId/experience","description":null,"parameters":[{"type":"String","name":"userId","description":"","default":"","optional":false}],"authentication":{"requiresTwitch":false,"requiresAuth":false,"requiresSession":false,"requiresAdmin":false},"requestBody":{"contentType":"application/json","example":"{\"Values\": [0]}"},"response":{"contentType":"application/json","returnType":"Boolean","example":"false"}},{"name":"UpdateStatisticsAsync","method":"POST","path":"/:userId/statistics","description":null,"parameters":[{"type":"String","name":"userId","description":"","default":"","optional":false}],"authentication":{"requiresTwitch":false,"requiresAuth":false,"requiresSession":false,"requiresAdmin":false},"requestBody":{"contentType":"application/json","example":"{\"Values\": [0]}"},"response":{"contentType":"application/json","returnType":"Boolean","example":"false"}},{"name":"UpdateResourcesAsync","method":"POST","path":"/:userId/resources","description":null,"parameters":[{"type":"String","name":"userId","description":"","default":"","optional":false}],"authentication":{"requiresTwitch":false,"requiresAuth":false,"requiresSession":false,"requiresAdmin":false},"requestBody":{"contentType":"application/json","example":"{\"Values\": [0]}"},"response":{"contentType":"application/json","returnType":"Boolean","example":"false"}},{"name":"GiftItem","method":"GET","path":"/:userId/gift/:receiverUserId/:itemId","description":null,"parameters":[{"type":"String","name":"userId","description":"","default":"","optional":false},{"type":"String","name":"receiverUserId","description":"","default":"","optional":false},{"type":"Guid","name":"itemId","description":"","default":"","optional":false}],"authentication":{"requiresTwitch":false,"requiresAuth":false,"requiresSession":false,"requiresAdmin":false},"requestBody":null,"response":{"contentType":"application/json","returnType":"Boolean","example":"false"}},{"name":"UpdateMany","method":"POST","path":"/update","description":null,"parameters":[],"authentication":{"requiresTwitch":false,"requiresAuth":false,"requiresSession":false,"requiresAdmin":false},"requestBody":{"contentType":"application/json","example":"{\"Values\": [{\"userId\":null,\"currentTask\":null,\"experience\":null,\"resources\":null,\"statistics\":null,\"revision\":0}]}"},"response":{"contentType":"application/json","returnType":"Boolean[]","example":null}}]},{"name":"Stream","description":null,"path":"api/stream","methods":[{"name":"Get","method":"GET","path":"/","description":null,"parameters":[],"authentication":{"requiresTwitch":false,"requiresAuth":false,"requiresSession":false,"requiresAdmin":false},"requestBody":null,"response":{"contentType":"application/json","returnType":"Void","example":"{}"}}]},{"name":"Twitch API","description":"Used by the website to allow authentication with Twitch. This is not meant to be used elsewhere.","path":"api/twitch","methods":[{"name":"GetChannelPictureAsync","method":"GET","path":"/logo/:userId","description":null,"parameters":[{"type":"String","name":"userId","description":"","default":"","optional":false}],"authentication":{"requiresTwitch":false,"requiresAuth":false,"requiresSession":false,"requiresAdmin":false},"requestBody":null,"response":{"contentType":"application/json","returnType":"ActionResult","example":null}},{"name":"Set Twitch Access Token","method":"GET","path":"/session","description":"Updates current session with the set Twitch access token, used as an user identifier throughout the website.","parameters":[],"authentication":{"requiresTwitch":false,"requiresAuth":false,"requiresSession":false,"requiresAdmin":false},"requestBody":null,"response":{"contentType":"application/json","returnType":"SessionInfo","example":"{\"id\":\"00000000-0000-0000-0000-000000000000\",\"userId\":null,\"userName\":null,\"authenticated\":false,\"requiresPasswordChange\":false}"}},{"name":"Get Access Token Request URL","method":"GET","path":"/access","description":"Gets a Twitch access token request url with the scope user:read:email.","parameters":[],"authentication":{"requiresTwitch":false,"requiresAuth":false,"requiresSession":false,"requiresAdmin":false},"requestBody":null,"response":{"contentType":"application/json","returnType":"System.String","example":"\"\""}},{"name":"Get Twitch User","method":"GET","path":"/user","description":"After authenticating with Twitch, this can be used to get information about the logged in user.","parameters":[],"authentication":{"requiresTwitch":false,"requiresAuth":false,"requiresSession":false,"requiresAdmin":false},"requestBody":null,"response":{"contentType":"application/json","returnType":"String","example":"\"\""}}]},{"name":"Version","description":null,"path":"api/version","methods":[{"name":"GetLatestUpdateInfoAsync","method":"GET","path":"/check","description":null,"parameters":[],"authentication":{"requiresTwitch":false,"requiresAuth":false,"requiresSession":false,"requiresAdmin":false},"requestBody":null,"response":{"contentType":"application/json","returnType":"UpdateData","example":"{\"downloadUrl\":null,\"version\":null,\"isAlpha\":false,\"isBeta\":false,\"released\":\"0001-01-01T00:00:00\"}"}}]}]};