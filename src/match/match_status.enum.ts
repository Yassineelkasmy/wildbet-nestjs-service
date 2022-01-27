export enum MatchStatus {
    NotStarted, //The event has not started
    Inplay, //The event is inplay
    UpdateLater, //Event will be updated later.
    Ended, //Event has ended after 90 minutes.
    Postponed, //The event has been Postponed.
    Cancelled, //The event has been Cancelled.
    Abandoned, //The event has abandoned and will continue at a later time or day.
    Interrupted, //The event has been interrupted. Can be due to bad weather for example.
    Suspended, //The event has been suspended.
    Awarded, //Winner is beeing decided externally.
    Delayed, //The event is delayed.
    HalfTime, //The event is in half-time
    ExtraTime, //The event is in extra time
    Penalties, //The event is in penalties because extra time didn't determinate a winner.
    BreakTime, //Event is in break waiting for extra time or penalties.
    Awarding, //Awarding of a victory to a contestant because there are no other contestants.
    ToBeAnnounced = 17, //The event has not been verified yet.
}