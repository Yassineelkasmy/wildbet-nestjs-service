contract Bid {
    string match_id;
    uint256 public matchSartTime;
    uint maxMatchTime =  2 * 60 * 60;
    struct MatchResult {
        bool home_wins;
        bool away_wins;
    }


    struct BidDetails{
        MatchResult matchResult;
        uint256 amount;
    }
    
    address payable private owner;
    mapping(address => BidDetails) public bidders;
    address[] public addressIndices;



    constructor(string memory _match_id , uint256 _matchSartTime ,address payable _owner){
        match_id = _match_id;
        matchSartTime = _matchSartTime;
        owner = _owner;
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    modifier matchNotStarted() {
        require(block.timestamp - matchSartTime >= maxMatchTime );
        _;
    }

    function bid(MatchResult memory matchResult)  public payable matchNotStarted {
        owner.transfer(msg.value);
        BidDetails memory bidDetails = BidDetails(matchResult , msg.value); 
        bidders[msg.sender] = bidDetails;
        addressIndices.push(msg.sender);

    }

    function endBid(MatchResult memory matchResult) public onlyOwner payable {

        uint256 loosersAmount;
        uint256 returnAmountForEachWinner;


        address[] memory  winners;
        address[] memory loosers;
        uint winnersIndex = 0;
        uint loosersIndex = 0;

        for (uint256 i = 0; i < addressIndices.length ; i++) {
            address bidder = addressIndices[i];
            BidDetails memory bidDetails = bidders[bidder];
            if(
                bidDetails.matchResult.home_wins == matchResult.home_wins &&
                bidDetails.matchResult.away_wins == matchResult.away_wins
            ) 
            {   
                
                winners[winnersIndex] = bidder;

                winnersIndex++;
            }

            else{

                loosers[loosersIndex] = bidder;
                loosersIndex++;
                loosersAmount+= bidDetails.amount;
            }

        }

        returnAmountForEachWinner = loosersAmount / loosers.length;

        for (uint256 index = 0; index < winners.length; index++) {
            uint256 totalToPayWinner = returnAmountForEachWinner;
            payable(winners[index]).transfer(totalToPayWinner);
        }



        
    }
}