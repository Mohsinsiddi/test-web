import { gql } from '@apollo/client'


export const CREATE_SEA_FREIGHT_SHIPMENT = gql`
mutation CreateSeaFreightShipment($data: SeaFrieghtShipmentInput!) {
  createSeaFrieghtShipment(data: $data) {
    message
    success
  }
}
`;

export const CREATE_AIR_FREIGHT_SHIPMENT = gql`
 mutation CreateAirFrieghtShipment($data: AirFrieghtShipmentInput!) {
  createAirFrieghtShipment(data: $data) {
    success
    message
  }
}
`;

export const CREATE_RAIL_FREIGHT_SHIPMENT = gql`
  mutation CreateRailFrieghtShipment($data: RailFrieghtShipmentInput!) {
  createRailFrieghtShipment(data: $data) {
    success
    message
  }
}
`;
export const CREATE_TRUCK_FREIGHT_SHIPMENT = gql`
 mutation CreateTruckFrieghtShipment($data: TruckFrieghtShipmentInput!) {
  createTruckFrieghtShipment(data: $data) {
    success
    message
  }
}
`;


export const GET_AIR_PRICE_COMPARISON_ALL_LISTS = gql`
  query GetAirPriceComparisonAllLists($input: AirPriceComparisonAllListsInput!) {
    getAirPriceComparisonAllLists(input: $input) {
      data {
        createdAt
        flightType
        frieghtType
        id
        pricePerWeight
        pricePerDistance
        packageName
      basePrice
      internationalSurgePercentage
        maxWeight
        minWeight
        packageDimensions {
          boxCount
          height
          length
          measurementUnit
          unit
          weight
          width
          dimensionUnit
          
        }
        ownerInfo {
          businessName
          city
          country
          state
          street
          zipcode
        }
        priority
        shipmentType
        weightUnit
        transitEstimatedDays
      fuelCharge 
       
      }
      message
      success
    }
       
  }
`;

export const GET_RAIL_PRICE_COMPARISON_ALL_LISTS = gql`
query GetRailPriceComparisonAllLists($input: RailPriceComparisonAllListsInput!) {
  getRailPriceComparisonAllLists(input: $input) {
    data {
      id
      carriageType
        pricePerDistance
      pricePerWeight
      packageName
      basePrice
      internationalSurgePercentage
      minWeight
      maxWeight
      weightUnit
      priority
      shipmentType
      frieghtType
      createdAt
      ownerInfo {
        businessName
        country
        city
        state
        street
        zipcode
      }
      transitEstimatedDays
      fuelCharge
    }
    message
    success
  }
}
  `; 

  export const GET_SEA_PRICE_COMPARISON_ALL_LISTS = gql`
query GetSeaPriceComparisonAllLists($input: SeaPriceComparisonAllListsInput!) {
    getSeaPriceComparisonAllLists(input: $input) {
      success
      message
      data {
        id
        containerType
        containerSize
        pricePerDistance
      pricePerWeight
      internationalSurgePercentage
      packageName
      basePrice
        minWeight
        maxWeight
        weightUnit
        priority
        shipmentType
        frieghtType
        createdAt
        ownerInfo {
          businessName
          country
          city
          state
          street
          zipcode
        }
          transitEstimatedDays
      fuelCharge
      }
    }
  }
    `;

    export const GET_TRUCK_PRICE_COMPARISON_ALL_LISTS = gql`
 query GetTruckPriceComparisonAllLists($input: TruckPriceComparisonAllListsInput!) {
      getTruckPriceComparisonAllLists(input: $input) {
        message
        success
        data {
          id
          truckType
          pricePerDistance
      pricePerWeight
      internationalSurgePercentage
      packageName
      basePrice
          minWeight
          maxWeight
          weightUnit
          priority
          frieghtType
          createdAt
          ownerInfo {
            businessName
            country
            city
            state
            street
            zipcode
          }
            transitEstimatedDays
      fuelCharge
      shipmentType
        }
      }
    }
      `;