import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";

const HomeScreen = () => {
  const recentJobs = [
    {
      id: "1",
      title: "Product Designer",
      company: "Google Inc",
      location: "California, USA",
      salary: "$15K/Mo",
      jobType: ["Full Time"],
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello</Text>
          <Text style={styles.userName}>Orlando Diggs.</Text>
        </View>
        <Image
          source={require("../../imgs/profileicon.png")}
          style={styles.profileImage}
        />
      </View>

      <View style={styles.promotion}>
        <View style={styles.textAndButton}>
          <Text style={styles.promoText}>50% off{"\n"}take any courses</Text>

          <TouchableOpacity style={styles.joinNowButton}>
            <Text style={styles.joinNowText}>Join Now</Text>
          </TouchableOpacity>
        </View>

        <Image
          source={require("../../imgs/promoimg.png")} 
          style={styles.promoImage}
          resizeMode="contain"
        />
      </View>

      {/* Find Your Job Section */}
      <Text style={styles.sectionTitle}>Find Your Job</Text>
      <View style={styles.jobStats}>
        <View style={[styles.jobCard, { backgroundColor: "#E3F4FF" }]}>
          <Text style={styles.jobCardTitle}>44.5k</Text>
          <Text style={styles.jobCardSubtitle}>Remote Job</Text>
        </View>
        <View style={[styles.jobCard, { backgroundColor: "#ECE2FF" }]}>
          <Text style={styles.jobCardTitle}>66.8k</Text>
          <Text style={styles.jobCardSubtitle}>Full Time</Text>
        </View>
        <View style={[styles.jobCard, { backgroundColor: "#FFEAE2" }]}>
          <Text style={styles.jobCardTitle}>38.9k</Text>
          <Text style={styles.jobCardSubtitle}>Part Time</Text>
        </View>
      </View>

      {/* Recent Job List Section */}
      <Text style={styles.sectionTitle}>Recent Job List</Text>
      <FlatList
        data={recentJobs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.jobListItem}>
            <Image
              source={require("../../imgs/companylogo.webp")}
              style={styles.companyLogo}
            />
            <View style={styles.jobInfo}>
              <Text style={styles.jobTitle}>{item.title}</Text>
              <Text style={styles.jobCompany}>
                {item.company} · {item.location}
              </Text>
              <Text style={styles.jobSalary}>{item.salary}</Text>
              <View style={styles.jobTags}>
                {item.jobType.map((tag, index) => (
                  <Text key={index} style={styles.jobTag}>
                    {tag}
                  </Text>
                ))}
              </View>
            </View>
            <TouchableOpacity style={styles.applyButton}>
              <Text style={styles.applyButtonText}>Apply</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1A0057",
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1A0057",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  promotion: {
    marginTop: 20,
    backgroundColor: "#130160",
    borderRadius: 15,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "visible", 
    position: "relative",
  },
  promoText: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
    marginBottom: 10,
  },
  joinNowButton: {
    backgroundColor: "#FF9228",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  joinNowText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  promoImage: {
    width: 150, 
    height: 200,
    position: "absolute",
    right: -0, 
    bottom: -20,
  },
  textAndButton: {
    flex: 1,
    justifyContent: "center",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1A0057",
    marginTop: 30,
    marginBottom: 10,
  },
  jobStats: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  jobCard: {
    flex: 1,
    height: 100,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  jobCardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  jobCardSubtitle: {
    fontSize: 14,
    color: "#666",
  },
  jobListItem: {
    flexDirection: "row",
    backgroundColor: "#F9F9F9",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  companyLogo: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  jobInfo: {
    flex: 1,
    marginLeft: 15,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  jobCompany: {
    fontSize: 14,
    color: "#666",
  },
  jobSalary: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1A0057",
  },
  jobTags: {
    flexDirection: "row",
    marginTop: 5,
  },
  jobTag: {
    backgroundColor: "#E3E3E3",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 12,
    marginRight: 5,
    color: "#666",
  },
  applyButton: {
    backgroundColor: "#130160",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  applyButtonText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default HomeScreen;
